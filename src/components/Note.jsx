import React from 'react'

export default function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className='note'>
        <h1>{props.title}</h1> 
        <h1>{props.content}</h1> 
        <button onClick={handleClick}>DELETE</button>

    </div>
  )
}
