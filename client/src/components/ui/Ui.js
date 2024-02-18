import React, { useRef } from 'react'

const Ui = () => {

    const fileInputRef=useRef()
    const onUploadClick=()=>{
        fileInputRef.current.click()
    }

    const logo="https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg"
  return (
    <div className='container'>
            <img src={logo} alt='this is a logo'/>
            <div className='wrapper'>
                <h1>Simple file sharing app</h1>
                <p>upload and share the download link</p>
                <button onClick={()=>onUploadClick()}>Upload</button>
            <input type='file' ref={fileInputRef} style={{display:"none"}}/>
            </div>
            
    </div>
  )
}

export default Ui