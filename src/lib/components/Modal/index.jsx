import { useState } from 'react'

/**
 * Create a modal that takes up the entire screen 
 * with its message at its center
 *  
 * @param {string} message
 * @param {Function} closeModal
 * @returns {JSX.Element} return a react modal component
 */
export default function Modal({ 
    message, 
    setModalState, 
    modalContainer, 
    modal, 
    crossContainer, 
    crossContainerHover, 
    rigthCross, 
    leftCross
}){
    const [over, setOver] = useState(false)

    function handleOverCross(){
        setOver(true)
    }
    function handleLeaveCross(){
        setOver(false)
    }
    
    return <div style={modalContainer} > 
        <div  style={modal}  onClick={setModalState}>
            {message} 
            <div 
                style={over ? crossContainerHover : crossContainer }
                onMouseOver={handleOverCross}
                onMouseLeave={handleLeaveCross}
            >
                <div style={leftCross}></div>
                <div style={rigthCross}></div>
            </div>
        </div>    
        
    </div>
}