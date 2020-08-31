import React, { useState, useEffect } from 'react';
import './styles/App.css';
import { Button, FormControl, InputLabel, Input, Typography } from '@material-ui/core'
import Todo from './components/Todo'
import db from './firebase'
import firebase from 'firebase'

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  console.log(input)

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, [])

  const addTodo = (event) => {
    event.preventDefault()
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos, input])
    setInput('')
  }

  return (
    <div className="App">
      <Typography variant="h2">
        Your ToDos
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
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
