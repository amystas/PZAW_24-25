import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Sci from './Sci';
import MyComponent from './MyComponent';
import Form from './Form';
import Table from './Table';
import Table2 from './Table2';
import Gallery from './Gallery/Gallery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Sci />
    <MyComponent></MyComponent>
    <Form></Form>
    <Table></Table>
    <Table2></Table2> */}
    <Gallery></Gallery>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
