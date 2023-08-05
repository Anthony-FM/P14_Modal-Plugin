import './index.css'
import React from 'react'

/**
 * Create a modal that takes up the entire screen 
 * with its message at its center
 *  
 * @param {string} message
 * @param {Function} closeModal
 * @returns {JSX.Element} return a react modal component
 */
export default function Modal({message, setModalState}){
    return <div className='modalcontainer' onClick={setModalState}> 
        <div className='modal'>
             {message} 
             <div className="crossContainer">
                <div className="leftCross"></div>
                <div className="rigthCross"></div>
            </div>
        </div>    
        
    </div>
}