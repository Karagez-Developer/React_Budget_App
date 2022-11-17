import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import './TemperatureApp.css'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

export const TemperatureApp = () => {

    const [deg, setDeg] = useState(0);
    const [anim, setAnim] = useState(false);
    const refSpan = useRef(null)
    const [state, setState] = useState(true);

    

    return (
        <div className='TemperatureApp'>
            <div className='wrapper'>
                <div className='circle'>
                    <SwitchTransition>
                        <CSSTransition
                            key={anim}
                            timeout={500}
                            classNames={state ? 'plus' : 'minus'}
                        >
                            <span ref={refSpan} className='deg'>{deg}°С</span>
                        </CSSTransition>
                    </SwitchTransition>
                </div>
                <div className='btnsWrapper'>
                    <button
                        className='btn' 
                        onClick={(e) => (
                            e.preventDefault(),
                            setDeg(deg - 1),
                            refSpan.current.classList.remove('plus'),
                            refSpan.current.classList.add('minus'),
                            setAnim(!anim),
                            setState(false)
                        )}>
                        -
                    </button>
                    <button
                        className='btn' 
                        onClick={(e) => (
                            e.preventDefault(),
                            setDeg(deg + 1),
                            refSpan.current.classList.remove('minus'),
                            refSpan.current.classList.add('plus'),
                            setAnim(!anim),
                            setState(true)
                        )}>
                        +
                    </button>
                </div>
            </div>

        </div>
    )
}
