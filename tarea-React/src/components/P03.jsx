import React from 'react'
import { useState } from 'react'

const HelloMyFriendState = (props) => {
  const [msj, setMensaje] = useState(`Hello my friend!`);

  function cambiarMensaje(){
    let nuevo = '';
    for (let i = 0; i < 15; i++) {
      nuevo += msj[i];
      if(i==14){
        nuevo += ' (from changed state)!'
      }
    }
    setMensaje(nuevo);
  }
  return (
    <div>
      <h1>{msj}</h1>
      <button onClick={cambiarMensaje}>Click me</button>
    </div>
  )
}

export default HelloMyFriendState