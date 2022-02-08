import './App.css';
import React from 'react';
import Header from './components/Header';
import AddPost from './components/AddPost';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App">
      <Header />
      <AddPost />
      <Posts />
    </div>
  );
}

export default App;
