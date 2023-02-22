import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import 'normalize.css'
import '@/assets/css/index.less'

import App from './App';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 严格模式
  <React.StrictMode>
    {/* Suspense 配合路由懒加载 react */}
    <Suspense fallback='loading'>
      {/* 配置store react-redux */}
      <Provider store={store}>
        {/* 配置hash路由 react-router-dom */}
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>
);

