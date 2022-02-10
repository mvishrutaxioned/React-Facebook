import React, { useContext, useState } from 'react';
import Post from './Post';
import { DataContext } from '../context/Context';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';

const Posts = () => {

    const value = useContext(DataContext);
    const { data, searchedPosts } = value;
    const [count, setCount] = useState(4);

    function handleData() {
        (data.length >= count ? setCount(count+4) : setCount(data.length))
        console.log(count)
    }
    useBottomScrollListener(handleData)

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
                                data.slice(0,count).map(item => {
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
