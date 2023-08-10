![Static Badge](https://img.shields.io/badge/NodeJs-v18.16.1-%2343853D)
![Static Badge](https://img.shields.io/badge/React-%3E%3D16-%2361DAFB)
![Static Badge](https://img.shields.io/badge/NPM-v9.5.1-%23C53635)

# Modal component
A simple Modal component for React. This component render a modal with a message in the center of the screen.

# Technologies
React
NPM
# Installation:
npm i p14-modal-plugin-afm
## Exemple:
``` Javascript
// import our component
import Modal from 'p14-modal-afm'
// import useState hook
import {useState} from 'react'
//CSS
import './index.css'

// Use constante props for styling the component
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

```

### Configuration:
The component needs two props for :

- {message}: write here the message you want to display in the modal.
- {setModalState}: handler to close the modal. You may need to use hook like useState to change state of ModalState.

For the styling, you need six more props:
- {modalContainer}: for the container
- {modal}: for the modal
- {crossContainer}: for the circle how contain the cross
- {crossContainerHover}: for the Hover
- {leftCross}: for on part of the cross
- {rigthCross}: for the other part of the cross

