import React from 'react';

const Post = ({ item }) => {
  return (
    <li>
        <div className="post-heading">
            <span className="icon user">user</span>
            <div className="title">
                <h2>User Name</h2>
                <small className="date">{item.date}</small>
            </div>
        </div>
        <p>{item.text}</p>
        {item.url && (
            <figure>
                <img src={item.url} alt={`Post ${item.id}`} />
            </figure>
        )}
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
  );
};

export default Post;
