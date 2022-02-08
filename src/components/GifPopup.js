import React from 'react';

const GifPopup = () => {
  return (
    <section className="gif-popup">
        <div className="wrapper">
        <div className="gif-popup-heading">
            <span className="back">back</span>
            <h2>Choose a GIF</h2>
        </div>
        <form action="#FIXME" method="GET" id="searchGif">
            <div>
            <button className="icon" type="submit">search</button>
            <input type="text" placeholder="Search GIF" id="gif-search" />
            </div>
        </form>
        <ul>
            <li><img src="https://images.pexels.com/photos/2848492/pexels-photo-2848492.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="GIFS" /></li>
            <li><img src="https://images.pexels.com/photos/2848492/pexels-photo-2848492.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="GIFS" /></li>
            <li><img src="https://images.pexels.com/photos/2848492/pexels-photo-2848492.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="GIFS" /></li>
            <li><img src="https://images.pexels.com/photos/2848492/pexels-photo-2848492.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="GIFS" /></li>
        </ul>
        </div>
    </section>
  );
};

export default GifPopup;
