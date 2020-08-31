import React, { useState } from 'react';
import './styles/App.css';
import { Button, FormControl, InputLabel, Input, Typography } from '@material-ui/core'
import Todo from './components/Todo'

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
      <Typography variant="h2">
        Your Todos
      </Typography>
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
          <Todo key={todo} text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
