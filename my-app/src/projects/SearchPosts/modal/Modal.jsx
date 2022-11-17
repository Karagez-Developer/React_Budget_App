import React, { useState } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';
import modal from './Modal.module.css';
import {createPortal} from 'react-dom';

// DOM element moda
const modalDOM = document.querySelector('#modal')

export const Modal = ({open, onClose, callback}) => {

    const [newPost, setNewPost] = useState({title: '', body: ''});


    // Modal element
    const modalElement = useMemo( () => document.createElement('div'), [] );

    useEffect( () => {
        // open == true, add modal window
        if (open) {
            modalDOM.appendChild(modalElement);

            return () => {
                modalDOM.removeChild(modalElement);
            }
        }
    } )

    if (open) {
        return createPortal(
            <div className={modal.modal_background} onClick={onClose}>
                <div className={modal.modal_block} onClick={(e) => e.stopPropagation()}>
                    <h1 className={modal.h1}>Добавление поста</h1>
                    <form className={modal.form} onSubmit={(e) => (
                            callback(e, newPost),
                            setNewPost({title: '', body: ''}),
                            onClose()
                        )}>
                        <label htmlFor="title">Название поста:</label>
                        <input type="text" value={newPost.title} onChange={(e) => setNewPost({...newPost, title: e.target.value})} className={modal.inp}/>
                        <label htmlFor="body">Описание поста:</label>
                        <input type="text" value={newPost.body} onChange={(e) => setNewPost({...newPost, body: e.target.value})} className={modal.inp}/>
                        <button className={modal.btn}>Добавить</button>
                    </form>
                </div>
            </div>,
            modalDOM
        )
    }

    return null;
}
