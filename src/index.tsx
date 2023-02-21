import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './components/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={store.persistor}>
      <Provider store={store.store}>
        <App />
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
