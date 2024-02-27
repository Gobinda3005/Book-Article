import React from 'react';
import ReactDOM from 'react-dom/client';
import BookList from './BL';
import BookListClass from './BLC';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookList />
    <BookListClass />
  </React.StrictMode>
);