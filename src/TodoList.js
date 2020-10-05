import React from 'react';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import Todo from './Todo';

function TodoList(props) {
  return (
    <Paper style={{ height: '100vh' }}>
      <List>
        {props.todos.map((todo) => (
          <>
            <Todo
              key={todo.id}
              task={todo.task}
              completed={todo.completed}
              id={todo.id}
            />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}
export default TodoList;
