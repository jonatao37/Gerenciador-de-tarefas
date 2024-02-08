import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Slices.jsx';
import './style.css'
import TextField from '@mui/material/TextField';

export default function AddTodo() {
  const [text, setText] = useState('');
  // initial the dispatch here
  const dispatch = useDispatch();

  const addTodoHandler = (event) => {
    event.preventDefault();
    // update the state here using addTodo action
    // action only receive one parameter, which is payload
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <form onSubmit={addTodoHandler}>
      <TextField id="outlined-basic" label="Escreva a sua tarefa" variant="outlined" 
      type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        className='input'/>
      <button>Send</button>
    </form>
  );
}