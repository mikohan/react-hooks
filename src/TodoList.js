import React from 'react';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import Todo from './Todo';

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <>
            <Todo
              key={todo.id}
              task={todo.task}
              completed={todo.completed}
              id={todo.id}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
            {todos.length - 1 < i && <Divider />}
          </>
        ))}
      </List>
    </Paper>
  );
}
export default TodoList;
