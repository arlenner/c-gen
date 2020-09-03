import React, { useReducer, useRef } from 'react'
import ColorController from '../color-controller'
import ColorDispenser from '../color-dispenser'
import './control-group.sass'

//Action Kinds Constants (exported to be used by child controls via dispatch)
export const    H_LEFT      = 'H_LEFT',
                H_RIGHT     = 'H_RIGHT',
                H_REFS      = 'H_REFS',      
                S_LEFT      = 'S_LEFT',
                S_RIGHT     = 'S_RIGHT',
                S_REFS      = 'S_REFS',
                L_LEFT      = 'L_LEFT',
                L_RIGHT     = 'L_RIGHT',
                L_REFS      = 'L_REFS',
                SET_H       = 'SET_H',
                SET_L       = 'SET_L',
                SET_S       = 'SET_S',
                DEACTIVATE  = 'DEACTIVATE',
                CHANGE_CT   = 'CHANGE_CT'


//default control states
const DEFAULT = {
    number: 5,
    h: {
        left: 64, 
        right: 192, 
        activeL: false, 
        activeR: false, 
        refs: { 
            l: null, 
            r: null, 
            m: null
        }
    },
    s: {
        left: 64, 
        right: 192, 
        activeL: false, 
        activeR: false, 
        refs: { 
            l: null, 
            r: null, 
            m: null
        }
    },
    l: {
        left: 64, 
        right: 192, 
        activeL: false, 
        activeR: false, 
        refs: { 
            l: null, 
            r: null, 
            m: null
        }
    },
}

//control group state reducer
const reducer = (acc, [kind, data]) => 

    kind === H_LEFT     ? { ...acc,
                            h: {...acc.h, activeL: !acc.h.activeL, activeR: false }, 
                            s: {...acc.s, activeL: false, activeR: false }, 
                            l: {...acc.l, activeL: false, activeR: false } 
                        }

:   kind === H_RIGHT    ? {  ...acc,
                            h: {...acc.h, activeL: false, activeR: !acc.h.activeR }, 
                            s: {...acc.s, activeL: false, activeR: false }, 
                            l: {...acc.l, activeL: false, activeR: false } 
                        }

:   kind === H_REFS     ? {  ...acc,
                            h: { ...acc.h, refs: {...data} },
                            s: { ...acc.s },
                            l: { ...acc.l }
                        }

:   kind === S_LEFT     ? {  ...acc,
                            h: {...acc.h, activeL: false, activeR: false }, 
                            s: {...acc.s, activeL: !acc.h.activeL, activeR: false }, 
                            l: {...acc.l, activeL: false, activeR: false } 
                        }                      
                        
:   kind === S_RIGHT    ? {  ...acc,
                            h: {...acc.h, activeL: false, activeR: false }, 
                            s: {...acc.s, activeL: false, activeR: !acc.h.activeR }, 
                            l: {...acc.l, activeL: false, activeR: false } 
                        }

:   kind === S_REFS     ? {  ...acc,
                            h: { ...acc.h },
                            s: { ...acc.s, refs: { ...data } },
                            l: { ...acc.l }
                        }
                    
:   kind === L_LEFT     ? {  ...acc,
                            h: {...acc.h, activeL: false, activeR: false }, 
                            s: {...acc.s, activeL: false, activeR: false }, 
                            l: {...acc.l, activeL: !acc.h.activeL, activeR: false } 
                        }

:   kind === L_RIGHT    ? {  ...acc,
                            h: {...acc.h, activeL: false, activeR: false }, 
                            s: {...acc.s, activeL: false, activeR: false }, 
                            l: {...acc.l, activeL: false, activeR: !acc.h.activeR } 
                        }

:   kind === L_REFS     ? {  ...acc,
                            h: { ...acc.h },
                            s: { ...acc.s },
                            l: { ...acc.l, refs: {...data} }
                        }

:   kind === SET_H      ? { ...acc,
                            h: {...acc.h, right: data.right, left: data.left }, 
                            s: {...acc.s }, 
                            l: {...acc.l } 
                        }

:   kind === SET_S      ? { ...acc,
                            h: {...acc.h }, 
                            s: {...acc.s, right: data.right, left: data.left }, 
                            l: {...acc.l } 
                        }
:   kind === SET_L      ? {  ...acc,
                            h: {...acc.h }, 
                            s: {...acc.s }, 
                            l: {...acc.l, right: data.right, left: data.left } 
                        }
                    
: kind === DEACTIVATE   ? {  ...acc,
                            h: {...acc.h, activeL: false, activeR: false }, 
                            s: {...acc.s, activeL: false, activeR: false }, 
                            l: {...acc.l, activeL: false, activeR: false } 
                        }
: kind === CHANGE_CT    ? {  number: data,
                            h: {...acc.h, activeL: false, activeR: false }, 
                            s: {...acc.s, activeL: false, activeR: false }, 
                            l: {...acc.l, activeL: false, activeR: false } 
                        }
:   /*default*/         acc

//Control Group component. Contains and manages state of controls.
export const ControlGroup = () => {

    const container = useRef(null)

    const [state, dispatch] = useReducer(reducer, DEFAULT)

    const onMouseMove = e => {
        if(!container.current) return //early out if container ref isn't ready yet on mouse move...

        Object.entries(state).forEach(([k, v]) => {
            if(k === 'number') return
            const {activeL, activeR, right, left, refs: { l, r, m } } = v
            if(activeR) {
                //cap relX between left control pos and end of track (255px)
                const relX    = Math.max(l.current.offsetLeft, Math.min(e.clientX - container.current.offsetLeft, 255))
                
                dispatch(['SET_'+k.toUpperCase(), { right: relX, left }])
                r.current.style.left  = relX + 'px'
                m.current.style.width = relX - left + 'px'
            }
            if(activeL) {
                //cap relX between start of track and the right control pos
                const relX = Math.max(0, Math.min(e.clientX - container.current.offsetLeft, r.current.offsetLeft))

                dispatch(['SET_'+k.toUpperCase(), { right, left: relX }])

                l.current.style.left  = relX + 'px'
                m.current.style.left  = relX + 8 + 'px'
                m.current.style.width = right - relX + 'px'
            }
        })     
    }

    const onMouseEventEnd = _ => {
        dispatch(['DEACTIVATE'])
    }

    return (
        <>
            <div
                ref={container}
                className='group-container'
                onMouseMove={onMouseMove}
                onMouseUp={onMouseEventEnd}
                onMouseLeave={onMouseEventEnd}>
                <ColorDispenser state={state} />
                <div className="button-container">
                    <button className="number-button"
                        onClick={_ => dispatch([CHANGE_CT, state.number - 1 < 3 ? 3 : state.number - 1])}>-</button>
                    <div style={{margin: '1em'}}>{state.number}</div>
                    <button className="number-button"
                        onClick={_ => dispatch([CHANGE_CT, state.number + 1 > 12 ? 12 : state.number + 1])}>+</button>
                </div>
                <ColorController store={{state, dispatch}} label='Hue' />
                <ColorController store={{state, dispatch}} label='Sat' />
                <ColorController store={{state, dispatch}} label='Light' />
            </div>
        </>
    )
}