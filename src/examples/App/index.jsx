import React from "react";
//The Modal Component
import {Modal} from "../../lib/";
// react Hook useState
import { useState } from "react";
//CSS
import './index.css'
const modalContainer = {
    width: '100vw',
    height: 'calc(100vh + 77px)',
    position: 'fixed',
    top: '-77px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(90,111,8, 0.8)',
    cursor: 'pointer'
}

const modal = {
    fontFamily: '"Roboto", Helvetica, sans-serif',
    width: '50%',
    height: '10%',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    border: '#6B8118 solid 3px',
    color: '#6B8118',
    fontSize: '1.3rem',
    fontWeight: '600',
    position: 'relative'
}

const crossContainer = {
    backgroundColor: '#2b3404',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: '-25px',
    top: '-25px',
    cursor: 'pointer'
}

const leftCross = {    
    width: '5px',
    height: '15px',
    backgroundColor: '#fff',
    transform: 'rotate(45deg) ',
    position: 'absolute'
}
const rigthCross = {    
    width: '5px',
    height: '15px',
    backgroundColor: '#fff',
    transform: 'rotate(315deg)',
    position: 'absolute'
}
const crossContainerHover = {
    backgroundColor: '#2b3404',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: '-25px',
    top: '-25px',
    cursor: 'pointer',
    transform: 'scale(1.05)'
}

export default function App(){
    const [modalState, setModalState] = useState(false)
    console.log(modalState)
    return <div className="container">
        <button onClick={() => setModalState(true)}>
            click on me      
        </button>
        {modalState === true ?
            (<Modal 
                message="my message"
                setModalState={() => setModalState(false)}
                modalContainer={modalContainer}
                modal={modal}
                crossContainer={crossContainer}
                crossContainerHover={crossContainerHover}
                leftCross={leftCross}
                rigthCross={rigthCross}
            />  ) 
            :
            ''   
        } 
    </div>
}
