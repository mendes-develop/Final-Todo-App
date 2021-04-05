import React from 'react';
import ReactDOM from 'react-dom';
// ./ significa no mesmo nivel desse arquivo
import App from './App';




ReactDOM.render(
  <App />
  ,
// essa funcao aqui embaixo captura aquele div do public/index.html e renderiza toda a nossa aplicaçao dentro dele
  document.getElementById('root')
);