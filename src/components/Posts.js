import React from 'react';

const Posts = () => {
  return (
    <section className="post-list">
        <div className="wrapper">
        <ul className="posts">
            <li>
            <div className="post-heading">
                <span className="icon user">user</span>
                <div className="title">
                <h2>Vishrut Margam</h2>
                <small className="date">08/02/2022</small>
                </div>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, at! Lorem, ipsum dolor.</p>
            <figure>
                <img src="https://images.pexels.com/photos/380707/pexels-photo-380707.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Post Image 1" />
            </figure>
            <div className="likes-comments">
                <a href="#FIXME" title="Likes">0</a>
                <a href="#FIXME" title="Comments">0 comments</a>
            </div>
            <ul className="post-attr">
                <li><a href="#FIXME" title="Like">Like</a></li>
                <li><a href="#FIXME" title="Like">Comment</a></li>
                <li><a href="#FIXME" title="Like">Share</a></li>
            </ul>
            </li>
        </ul>
        </div>
    </section>
  );
};

export default Posts;
