import React, { useContext } from 'react';
import Post from './Post';
import { DataContext } from '../context/Context';

const Posts = () => {

    const value = useContext(DataContext);
    const { data, searchedPosts } = value;

    return (
        <>
            <section className="post-list">
                <div className="wrapper">
                    <ul className="posts">
                        {searchedPosts.length ?
                            searchedPosts.map(item => {
                                return <Post key={item.id} item={item} />
                            })
                        :
                            (data.length ? (
                                data.map(item => {
                                    return <Post key={item.id} item={item} />
                                })
                            ) : <h3>No Posts Found !!</h3>)
                        }
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Posts;
