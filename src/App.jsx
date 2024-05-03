// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import { User } from './feature/user/Users';

function App() {
  return (
    <Provider store={store}>
      <User />
    </Provider>
  );
}

export default App;