import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addTodo} from "../actions";

export const Todo = () => {
  const todoReducer = useSelector(state => state.todoReducer);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const { items } = todoReducer;
  const trimmedValue = value.trim();

  const handleTodoTitleChange = (event) => {
    setValue(event.target.value);
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
          type="text"
          onChange={handleTodoTitleChange}
          value={value}
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
        { items.map(item => (
          <li key={item.id}>
            {item.title}
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
