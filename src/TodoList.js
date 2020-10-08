import React, { useContext } from 'react';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import Todo from './Todo';
import { TodosContext } from './context/todos.context';

function TodoList() {
  const todos = useContext(TodosContext);
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <div key={todo.id}>
              <Todo {...todo} id={todo.id} />
              {todos.length - 1 < i && <Divider key={todo.id} />}
            </div>
          ))}
        </List>
      </Paper>
    );
  return null;
}
export default TodoList;
