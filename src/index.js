// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import {Provider} from "react-redux";
// import { store, persistor } from './store/Index.js';
// import { PersistGate } from 'redux-persist/lib/integration/react';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//     <App />
//     </Provider>,
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import { store, persistor } from './store/Index.js';
import { PersistGate } from 'redux-persist/lib/integration/react';
import {createRoot} from 'react-dom/client';

// ReactDOM.render(
//   <Provider store={store}>
//     <PersistGate persistor={persistor}>
//       <App />
//     </PersistGate>
//   </Provider>,
//   document.getElementById('root')
// );

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);

root.render(
  <Provider store={store}>
     {/* <PersistGate persistor={persistor}> */}
       <App />
     {/* </PersistGate> */}
   </Provider>,
);