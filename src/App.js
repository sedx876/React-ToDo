import React, { useState } from 'react';
import './styles/App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core'

function App() {
  const [todos, setTodos] = useState(['Read', 'Write', 'Code']);
  const [input, setInput] = useState('');
  console.log(input)

  const addTodo = (event) => {
    event.preventDefault()
    console.log('It does work!')
    setTodos([...todos, input])
    setInput('')
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <FormControl>
        <InputLabel>Write a ToDo</InputLabel>
        <Input 
          value={input} 
          onChange={event => setInput(event.target.value)} 
        />
        <Button disabled={!input} 
          type="submit" 
          onClick={addTodo} 
          variant="contained" 
          color="primary">
          Add ToDo
        </Button>
      </FormControl>
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
