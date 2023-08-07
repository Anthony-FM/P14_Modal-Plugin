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

export function myfunction(){
    const [modalState, setModalState] = useState(false)
    return <>
        <button onClick={() => setModalState(true)}>
        {modalState === true ?
            <Modal 
                message="my message"
                setModalState={() => setModalState(false)}
            />
            :
            ''        
        } 
        
        </button>
    </>
}
```

### Configuration:
The component needs two props :

- {message}: write here the message you want to display in the modal.
- {setModalState}: handler to close the modal. You may need to use hook like useState to change state of ModalState.

