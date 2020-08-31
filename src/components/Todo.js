import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core';
import '../styles/Todo.css'

function Todo(props) {
  return (

    <List className="todo__list">
      <ListItem>
        <ListItemText 
          primary={props.text} 
          secondary='PlaceHolder Deadline'   
        /> 
      </ListItem>
    </List>
    
      // <li>{}</li>
    
  )
}

export default Todo
