import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import { addTodo, removeTodo, setFilter } from '../actions';
import Icon from "@material-ui/core/Icon";


export const Todo = () => {
  const todoReducer = useSelector(state => state.todoReducer);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const { items, filter } = todoReducer;
  const trimmedValue = value.trim();

  const filteredItems = items.filter(item => (
    item.title.toLowerCase().indexOf(filter.trim().toLocaleLowerCase()) !== -1
  ));

  function handleAddTodoItem() {
    if (trimmedValue !== '') {
      dispatch(addTodo(value));
      setValue('');
    }
  }

  const handleTodoTitleChange = event => {
    setValue(event.target.value);
  };

  const handleTodoTitleInputKeydown = event => {
    if (event.key === 'Enter') {
      handleAddTodoItem();
    }
  };

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={`todo ${!trimmedValue ? 'todo--input-empty' : ' '}`}>
      <div className="todo-controls">
        <TextField
          id="todo-input"
          label="Please type in TODO"
          onChange={handleTodoTitleChange}
          onKeyDown={handleTodoTitleInputKeydown}
          value={value}
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
          <li key={item.id}>
            { item.title }
            <Button
              className="todo__list-item-btn"
              variant="contained"
              color="primary"
              startIcon={<DeleteIcon />}
              onClick={() => { dispatch(removeTodo(item.id)); }}
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
