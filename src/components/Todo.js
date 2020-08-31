import React from 'react'
import { List, ListItem, ListItemText, Button } from '@material-ui/core';
import '../styles/Todo.css'
import db from '../firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

function Todo(props) {
  return (

    <List className="todo__list">
      <ListItem>
        <ListItemText 
          primary={props.todo.todo}  
        /> 
      </ListItem>
      <DeleteForeverIcon 
        variant="contained" 
        color="secondary"
        onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
    </List>
    
      // <li>{}</li>
    
  )
}

export default Todo
