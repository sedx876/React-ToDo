import React, { useState, useEffect } from 'react';
import './styles/App.css';
import { Button, FormControl, InputLabel, Input, Typography } from '@material-ui/core'
import Todo from './components/Todo'
import db from './firebase'

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  console.log(input)

  useEffect(() => {
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, [])

  const addTodo = (event) => {
    event.preventDefault()
    db.collection('todos').add({
      todo: input
    })
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
