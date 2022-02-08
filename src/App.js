import './App.css';
import React from 'react';
import Header from './components/Header';
import AddPost from './components/AddPost';
import Posts from './components/Posts';
import Popup from './components/Popup';
import GifPopup from './components/GifPopup';

function App() {
  return (
    <div className="App">
      <Header />
      <AddPost />
      <Posts />
      <Popup />
      <GifPopup />
    </div>
  );
}

export default App;
