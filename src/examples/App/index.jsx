import React from "react";
//The Modal Component
import {Modal} from "../../lib/";
// react Hook useState
import { useState } from "react";
//CSS
import './index.css'

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
            />  ) 
            :
            ''   
        } 
    </div>
}
