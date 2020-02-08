import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, setFilter } from '../actions';

export const Todo = () => {
  const todoReducer = useSelector(state => state.todoReducer);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const { items, filter } = todoReducer;
  const trimmedValue = value.trim();

  const filteredItems = items.filter(item => (
    item.title.toLowerCase().indexOf(filter.trim().toLocaleLowerCase()) !== -1
  ));

  const handleTodoTitleChange = event => {
    setValue(event.target.value);
  };

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  const handleAddTodoItem = () => {
    dispatch(addTodo(value));
    setValue('');
  };

  return (
    <div className={`todo ${!trimmedValue ? 'todo--input-empty' : ' '}`}>
      <div className="todo-controls">
        <input
          id="todo-input"
          placeholder="Please type in TODO"
          onChange={handleTodoTitleChange}
          value={value}
        />
        <input
          className="todo__controls-input"
          placeholder="Please type in filter"
          onChange={handleFilterChange}
        />
        <button
          className="todo-btn-add"
          id="todo-btn-add"
          disabled={!trimmedValue}
          onClick={handleAddTodoItem}
        >
          Add
        </button>
      </div>
      <ul>
        { filteredItems.map(item => (
          <li key={item.id}>
            { item.title }
            <button
              className="todo__list-item-btn"
              onClick={ () => { dispatch(removeTodo(item.id)); }}
            >
              X
            </button>
          </li>
        )) }
        { !!trimmedValue && (
          <li className="todo__list-item todo__item-preview">
            { trimmedValue }
          </li>
        )
        }
      </ul>
    </div>
  );
};
