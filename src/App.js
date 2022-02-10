import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import AddPost from './components/AddPost';
import Posts from './components/Posts';
import Popup from './components/Popup';
import GifPopup from './components/GifPopup';
import { ContextProvider } from './context/Context';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [showGifPopup, setShowGifPopup] = useState(false);
  const [gifUrl, setGifUrl] = useState("");

  return (
    <ContextProvider>
      <div className="App">
        {showPopup && <span className="layer">layer</span>}
        <Header />
          <AddPost setShowPopup={setShowPopup} />
          <Posts />
          { showPopup && <Popup gif={{gifUrl, setGifUrl}} setGifUrl={setGifUrl} popUp={setShowPopup} gifPopUp={setShowGifPopup} /> }
          { showGifPopup && <GifPopup setUrl={e => setGifUrl(e)} gifPopUp={setShowGifPopup} /> }
      </div>
    </ContextProvider>
  );
}

export default App;
