import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Banner from './components/Banner';
import NavigationBar from './components/Nav/NavigationBar';

ReactDOM.render(
  <React.StrictMode>
    <Banner />
    <App />
    <NavigationBar />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
