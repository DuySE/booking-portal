import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configStore from './stores';
import Routes from './pages';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const { store } = configStore();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
