import React, { createContext } from 'react';
import useTodoState from '../hooks/useToggleState';

const defaultTodos = [
  { id: 1, task: 'Mow the lawn using goats', comleted: false },
  { id: 2, task: 'Remove lady bugs into garden', comleted: true },
];
export const TodosContext = createContext();

function TodosProvider(props) {
  const todoStuff = useTodoState(defaultTodos);
  return (
    <TodosContext.Provider value={todoStuff}>
      {props.children}
    </TodosContext.Provider>
  );
}

export default TodosProvider;
