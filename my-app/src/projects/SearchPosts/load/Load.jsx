import React from 'react'
import './Load.css';
import { CSSTransition } from 'react-transition-group'

export const Load = ({loading}) => {
    return (
        <div className='circle-wrapper'>
            <CSSTransition
                in={loading}
                timeout={1000}
                classNames='circle'
                mountOnEnter
                unmountOnExit
            >
                <div className="circle"></div>
            </CSSTransition>
        </div>
    )
}
