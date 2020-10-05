import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

import { v4 as uuidv4 } from 'uuid';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp() {
  const initialTodos = [
    { id: 1, task: 'Clean Fishtank', completed: false },
    { id: 2, task: 'Wash Car', completed: true },
    { id: 3, task: 'Grow Beard', completed: false },
  ];
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const toggleTodo = (todoId) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === todoId
          ? { ...todo, completed: !todo.completed }
          : todo;
      })
    );
  };
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa',
      }}
    >
      <AppBar color="primary" position="static" style={{ height: '64px' }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
