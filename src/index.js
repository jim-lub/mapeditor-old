import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { App } from 'App';
import { Firebase, FirebaseContext } from 'lib/firebase';
import rootReducer from './reducers';

import 'css';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <FirebaseContext.Provider value={new Firebase()}>
        <App />
      </FirebaseContext.Provider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
