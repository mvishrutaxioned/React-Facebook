import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GifPopup = ({ gifPopUp, setUrl }) => {

  const [gifs, setGifs] = useState([]);
  const [searchGif, setSearchGif] = useState("");

  useEffect(() => {
    fetchGifs(searchGif);
    // eslint-disable-next-line
  }, [searchGif]);

  async function fetchGifs(str) {
    let url = "";
    (str.length ? 
      url = `https://api.giphy.com/v1/gifs/search?api_key=vwCJb5WqEeZPk3DZXFNzkCOmLUNqJnDv&limit=5&q=${str}`:
      url = `https://api.giphy.com/v1/gifs/trending?api_key=vwCJb5WqEeZPk3DZXFNzkCOmLUNqJnDv&limit=5`
    )
    await axios.get(url)
    .then(res => setGifs(res.data.data))
    .catch(e => console.log(e));
  }

  function sendGif(link) {
    setUrl(link)
    gifPopUp(false)
  }

  return (
    <section className="gif-popup">
      <div className="wrapper">
      <div className="gif-popup-heading">
          <span onClick={e => gifPopUp(false)} className="back">back</span>
          <h2>Choose a GIF</h2>
      </div>
      <form action="#FIXME" method="GET" id="searchGif">
          <div>
          <button className="icon" type="submit">search</button>
          <input type="text" placeholder="Search GIF" id="gif-search" onChange={e => setSearchGif(e.target.value)} />
          </div>
      </form>
      <ul>
        {gifs.map(gif => {
          return (
            <li key={gif.id} onClick={() => sendGif(gif.images.original.url)}>
              <a href="#FIXME" title={gif.username}>
                <img src={gif.images.original.url} alt={gif.username} />
              </a>
            </li>
          )
        })}
      </ul>
      </div>
    </section>
  );
};

export default GifPopup;
