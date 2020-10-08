import React, { useContext } from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chechbox from '@material-ui/core/Checkbox';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import { DispatchContext } from './context/todos.context';

function Todo({ task, completed, id }) {
  const { dispatch } = useContext(DispatchContext);
  const [isEditing, toggle] = useToggleState(false);

  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ? (
        <EditTodoForm task={task} id={id} toggleEditForm={toggle} />
      ) : (
        <>
          <Chechbox
            checked={completed}
            tabIndex={-1}
            onChange={() => dispatch({ type: 'TOGGLE', id: id })}
          />
          <ListItemText
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              onClick={() => dispatch({ type: 'REMOVE', id: id })}
              aria-label="Delete"
            >
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={toggle} aria-label="Edit">
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default Todo;
