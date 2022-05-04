import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './sass/main.scss';
import App from './components/App';
import store from './state/store';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
