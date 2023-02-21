import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        DocMind
      </div>
    </Provider>
  );
}

export default App;
