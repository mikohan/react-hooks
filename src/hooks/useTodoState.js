import useLocalstorageState from './useLocalStorageState';
import { v4 as uuidv4 } from 'uuid';

export default (initialTodos) => {
  const [todos, setTodos] = useLocalstorageState('todos', initialTodos);
  return {
    todos,
    addTodo: (newTodoText) => {
      setTodos([
        ...todos,
        { id: uuidv4(), task: newTodoText, completed: false },
      ]);
    },
    removeTodo: (todoId) => {
      setTodos(todos.filter((todo) => todo.id !== todoId));
    },
    toggleTodo: (todoId) => {
      setTodos(
        todos.map((todo) => {
          return todo.id === todoId
            ? { ...todo, completed: !todo.completed }
            : todo;
        })
      );
    },

    editTodo: (todoId, task) => {
      setTodos(
        todos.map((todo) =>
          todo.id === todoId ? { ...todo, task: task } : todo
        )
      );
    },
  };
};

// const addTodo = (newTodoText) => {
//   setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
// };

// const removeTodo = (todoId) => {
//   setTodos(todos.filter((todo) => todo.id !== todoId));
// };

// const toggleTodo = (todoId) => {
//   setTodos(
//     todos.map((todo) => {
//       return todo.id === todoId
//         ? { ...todo, completed: !todo.completed }
//         : todo;
//     })
//   );
// };

// const editTodo = (todoId, task) => {
//   setTodos(
//     todos.map((todo) => (todo.id === todoId ? { ...todo, task: task } : todo))
//   );
// };
