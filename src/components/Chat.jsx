import React from 'react'
import Cam from '../img/cam.png'
import Add from '../img/add.png'
import More from '../img/more.png'
import Messages from './Messages'
import Input from './Input'


const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>
          Ansh
        </span>
        <div className='chatIcons'>
          <img  className='icons' src={Cam}/>
          <img className='icons' src={Add}/>
          <img className='icons' src={More}/>
        </div>
      </div>
      <Messages/>
      <Input/> 
    </div>
  )
}

export default Chat
