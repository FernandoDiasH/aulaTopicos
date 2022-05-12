import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Topo from './Topo';
import Rodape from './Rodape'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Topo />
    <App />
    <Rodape />
    
  </React.StrictMode>
);

