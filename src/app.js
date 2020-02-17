import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { Counter } from './modules/counter/components';
import { Todo } from './modules/todo/components/index';


ReactDOM.render(
  <Provider store={store}>
    <Counter firstName="Alex" />
    <Todo />
  </Provider>,
  document.getElementById('root'),
);
