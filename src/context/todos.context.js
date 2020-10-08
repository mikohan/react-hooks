import React, { createContext } from 'react';
import todoReducer from '../reducers/todo.reducer';
import useLocalstorageReducer from '../hooks/useLocalstorageReducer';

const defaultTodos = [
  { id: 1, task: 'Mow the lawn using goats', comleted: false },
  { id: 2, task: 'Remove lady bugs into garden', comleted: true },
];
export const TodosContext = createContext();
export const DispatchContext = createContext();

function TodosProvider(props) {
  // const todoStuff = useTodoState(defaultTodos);
  const [todos, dispatch] = useLocalstorageReducer(
    'todos',
    defaultTodos,
    todoReducer
  );
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}

export default TodosProvider;
