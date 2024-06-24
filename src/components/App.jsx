import React, { useState } from 'react'
import Heading from './Heading'
import Footer from './Footer'
import InputForm from './InputForm'
import Note from './Note'

export default function App() {
  const [notes,setNotes] = useState([]);

  function addNote(newNote){
    setNotes(preNotes => {
      return [...preNotes,newNote];
    });

  }

  function deleteNote(id){
    setNotes(preNotes => {
      return preNotes.filter((noteItem,index) => {
        return index !==id;
      });
    });
  }


  return (
    <div>

    <Heading />
    <InputForm onAdd={addNote}/>
    {notes.map((noteItem, index) => {
      return (<Note 
      key={index}
      id={index}
      title={noteItem.title}
      content={noteItem.content}
      onDelete={deleteNote}
      />
      );
    })}

    <Footer />
        
    </div>
    
  )
}
