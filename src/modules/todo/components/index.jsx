import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import LinearProgress from '@material-ui/core/LinearProgress';
import {
  addTodo, getTodoItems, removeTodo, setFilter,
} from '../actions';


export const Todo = () => {
  const todoReducer = useSelector(state => state.todoReducer);
  const dispatch = useDispatch();
  const [titleValue, setTitleValue] = useState('');
  const { isLoading, items, filter } = todoReducer;
  const trimmedValue = titleValue.trim();

  useEffect(() => {
    dispatch(getTodoItems(titleValue));
  }, []);

  const filteredItems = items.filter(item => (
    item.title.toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1
  ));

  function handleAddTodoItem() {
    if (trimmedValue !== '') {
      dispatch(addTodo(titleValue));
      setTitleValue('');
    }
  }

  const handleTodoTitleChange = event => {
    setTitleValue(event.target.value);
  };

  const handleTodoTitleInputKeydown = event => {
    if (event.key === 'Enter') {
      handleAddTodoItem();
    }
  };

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  if (isLoading) {
    return (
      <div className="todo">
        <LinearProgress className="todo__spinner" />
      </div>

    );
  }

  // {`todo ${!trimmedValue ? 'todo--input-empty' : ' '}`}
  return (
    <div className="todo">
      <div className="todo-controls">
        <TextField
          id="todo-input"
          label="Please type in TODO"
          onChange={handleTodoTitleChange}
          onKeyDown={handleTodoTitleInputKeydown}
          value={titleValue}
          variant="outlined"
        />
        <TextField
          className="todo__controls-input"
          label="Please type in filter"
          onChange={handleFilterChange}
          value={filter}
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          className="todo-btn-add"
          id="todo-btn-add"
          endIcon={<Icon>send</Icon>}
          disabled={!trimmedValue}
          onClick={handleAddTodoItem}
        >
         add
        </Button>
      </div>
      <ul>
        { filteredItems.map(item => (
          <li key={item._id}>
            { item.title }
            <Button
              className="todo__list-item-btn"
              variant="contained"
              color="primary"
              startIcon={<DeleteIcon />}
              onClick={() => { dispatch(removeTodo(item._id)); }}
            >
              DELETE
            </Button>
          </li>
        )) }
        { !!trimmedValue && (
          <li className="todo__list-item todo__item-preview">
            { trimmedValue }
          </li>
        )}
      </ul>
    </div>
  );
};
