import React, { useState } from 'react'

export default function InputForm(props) {
  const [note,setNote] = useState({
    title: "",
    content:""
  });

  function handlechange(event){
    const { name,value} = event.target;
    setNote(preNote => {
      return {
        ...preNote,
        [name]:value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });

    event.preventDefault();
  }



  return (
    <div>
        <form>
            <input 
            name="title"
            onChange={handlechange}
            value={note.title}
            placeholder='Title'
            >
            </input>
            <textarea
            name='content'
            onChange={handlechange}
            value={note.content}
            placeholder='Take a note...'
            rows="3"
            >
            </textarea>
            <button onClick={submitNote}>Add</button>
        </form>
    </div>
  )
}
