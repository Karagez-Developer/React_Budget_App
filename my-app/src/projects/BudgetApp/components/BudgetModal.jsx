import React from 'react'
import './BudgetModal.css'
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { useState } from 'react';

const modalDOM = document.querySelector('#modal');

export const BudgetModal = ({open, onClose, callback}) => {

    const [increase, setIncrease] = useState();

    // Modal element
    const modalElement = useMemo( () => document.createElement('div'), [] );

    useEffect(() => {
        if (open) {
            modalDOM.appendChild(modalElement);

            return () => {
                modalDOM.removeChild(modalElement);
            }
        }
    })

    if(open) {
        return createPortal( 
            <div className='modal_background' onClick={onClose}>
                <div className='modal_block' onClick={(e) => e.stopPropagation()}>
                    <h2 className='h2_modal'>How much do you want to increase your budget by?</h2>
                    <form onSubmit={(e) => (e.preventDefault(), setIncrease(0),callback(increase))}>
                        <label>Increase by:</label><br/>
                        <input className='modal_inp' type="number" min={0} value={increase} onChange={(e) => setIncrease(+e.target.value)} /><br/>
                        <button className='modal_btn'>Add</button>
                    </form>
                </div>
            </div>,
            modalDOM
        )
    }

    return null;


}
