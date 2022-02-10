import React from 'react';

const AddPost = ({ setShowPopup }) => {
  return (
    <section className="addPost">
        <div className="wrapper">
        <div className="send">
          <span className="icon user">user</span>
          <form action="#FIXME" method="GET" id="searchForm">
            <div>
              <input type="text" placeholder="What's on your mind, Vishrut ?" id="addInput" onClick={e => setShowPopup(true)} />
            </div>
          </form>
        </div>
        <ul>
            <li><a href="#FIXME" title="Live Video">Live video</a></li>
            <li><a href="#FIXME" title="Photo / Video">Photo/video</a></li>
            <li><a href="#FIXME" title="Feeling / Activity">Feeling/Activity</a></li>
        </ul>
        </div>
    </section>
  );
};

export default AddPost;
