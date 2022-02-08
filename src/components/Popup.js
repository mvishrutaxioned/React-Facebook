import React from 'react';

const Popup = () => {
  return (
    <section className="popup">
        <h2>Create post</h2>
        <div className="wrapper">
        <span className="close-popup">x</span>
        <div className="popup-heading">
            <span className="icon user">user</span>
            <div className="popup-title">
            <h2>Vishrut Margam</h2>
            <select>
                <option value="friends">Friends</option>
                <option value="friends">Friends</option>
                <option value="friends">Friends</option>
            </select>
            </div>
        </div>
        <form action="#FIXME" method="POST">
            <div className="createdPost">
            <textarea id="text" placeholder="What's on your mind, Vishrut?"></textarea>
            <figure>
            <span className="close-image">x</span>
            <img src="https://scontent.fbom16-1.fna.fbcdn.net/v/t39.30808-6/p180x540/273386797_5205243892819086_2098019058855507585_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=a26aad&_nc_ohc=Wu4z-2vWGK0AX9-nZqh&tn=RDV7-52vjv1jkxvo&_nc_ht=scontent.fbom16-1.fna&oh=00_AT8R2vyOtOC7H3NDjP5N0GMZ3l1QD5kZakWQYVTVVH5CqA&oe=62074198" alt="Photo" />
            </figure>
            </div>
            <div className="post-specs">
            <p>Add to your post</p>
            <div>
                <div>
                <input type="file" name="photo" id="photo" accept="image/*" />
                <label htmlFor="photo">pic</label>
                </div>
                <div><a href="#FIXME" title="Gif File">gif</a></div>
            </div>
            </div>
            <button type="submit">Post</button>
        </form>
        </div>
    </section>
  );
};

export default Popup;
