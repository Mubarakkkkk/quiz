import React, {useRef} from 'react'

import '../styles/start.css';

export default function Start( {setUserName} ) {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.value && setUserName(inputRef.current.value);
    }

  return (
    <>

        <div className = "user_info" >
            <form className="user_form"> 
                <div className="user_details">
                    <input type="text" className="user_input" ref={inputRef} placeholder='Enter your name here...' />
                    <button type = "button" className = "user_button" onClick={handleClick}>Start</button>
                </div>
            </form>
        </div>   
    
    </>
  )
}
