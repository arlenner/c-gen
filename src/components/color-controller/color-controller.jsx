import React, { useRef, useEffect } from 'react'
import './color-controller.sass'

/**
 * One of a Hue, Saturation, or Lightness control. Delegates its state changes to parent ControlGroup. 
 * !The {label} prop must be set to one of (case insensitive) 'HUE', 'SAT', or 'LIGHT' values.
 */
export const ColorController = ({ store: {dispatch}, label = ''}) => {

    //references to the DOM Elements that are active in this custom control
    //will be passed up to the control-group for state management
    const range         = useRef(null),
          leftControl   = useRef(null),
          rightControl  = useRef(null)

    //pack refs conveniently for the reducer
    const getRefs = _ => ({ l: leftControl, r: rightControl, m: range })

    //use label to determine role
    useEffect(() =>  dispatch([label[0].toUpperCase()+'_REFS', getRefs()]), [])

    const onTouch = part => e => {
        dispatch([label[0].toUpperCase() + '_' + part])
    }
    //part is 'LEFT' or 'RIGHT'
    const onMouse = part => _ => {  
        dispatch([label[0].toUpperCase() + '_' + part]) 
    }

    //RENDER ----------------------------V

    return (
        <>
            <div className="container">
                <div className="label">{label}</div>
                <div className="input">
                    <div id="col_track"className="track"></div>
                    <div 
                        ref={range}
                        className="middle"
                        style={{
                            width: `128px`,
                            left: `72px`
                        }}></div>
                    <button
                        ref={leftControl}
                        className="control"
                        style={{
                            left: `64px`
                        }}
                        onMouseDown={onMouse('LEFT')}
                        onMouseUp={onMouse('LEFT')}
                        onTouchStart={onTouch('LEFT')}
                        onTouchEnd={onTouch('LEFT')}></button>
                    <button 
                        ref={rightControl}
                        className="control"
                        style={{
                            left: `192px`
                        }}
                        onMouseDown={onMouse('RIGHT')}
                        onMouseUp={onMouse('RIGHT')}
                        onTouchStart={onTouch('RIGHT')}
                        onTouchEnd={onTouch('RIGHT')}></button>
                </div>
            </div>
        </>
    )
}
