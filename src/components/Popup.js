import React, { useState, useEffect, useRef, useContext } from 'react';
import { DataContext } from '../context/Context';

const Popup = ({ popUp, gifPopUp, gif }) => {

    const value = useContext(DataContext);
    const date = new Date();
    let today = date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();
    const [text, setText] = useState("");
    const imageInputRef = useRef(null);
    const inputRef = useRef(null);
    const { gifUrl, setGifUrl } = gif;
    let { profile, setProfile, uploader } = useDisplayImage();

    // setProfile on gifUrl updation
    useEffect(() => setProfile(gifUrl), [gifUrl])

    // run once on render
    useEffect(() => {
        setGifUrl("")
        inputRef.current.focus()
    }, []);

    // display image functionality
    function useDisplayImage() {
        const [profile, setProfile] = useState("");

        // run on upload functionality
        function uploader(e, str) {
            if(str === 'close') return setProfile("");
            else {
                const reader = new FileReader();
                reader.addEventListener("load", (e) => {
                    setProfile(e.target.result);
                });
                reader.readAsDataURL(e.target.files[0]);
            }
        }
        return { profile, setProfile, uploader };
    }

    // handle submit functionality
    function handleSubmit(e) {
        e.preventDefault();
        const newData = {
            id: Math.round(Math.random() * 1000),
            date: today,
            text,
            url: profile
        }
        value.addData(newData);
        popUp(false);
    }

    return (
        <section className="popup">
            <h2>Create Post</h2>
            <div className="wrapper">
            <span onClick={() => popUp(false)} className="close-popup">x</span>
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
            <form action="#FIXME" method="POST" onSubmit={handleSubmit}>
                <div className="createdPost">
                    <textarea name="text" id="text" placeholder="What's on your mind, Vishrut?" ref={inputRef} value={text} onChange={e => setText(e.target.value)}>
                    </textarea>
                    {profile && 
                        <figure>
                            <span onClick={e => uploader(e, 'close')} className="close-image">x</span>
                            <img src={profile} alt="Selected Post" />
                        </figure>
                    }
                </div>
                <div className="post-specs">
                    <p>Add to your post</p>
                    <div>
                        <div>
                            <input type="file" name="url" id="photo" accept="image/*" ref={imageInputRef} onChange={e => uploader(e)} />
                            <label htmlFor="photo">pic</label>
                        </div>
                        <div><a onClick={e => gifPopUp(true)} href="#FIXME" title="Gif File">gif</a></div>
                    </div>
                </div>
                <button className={!text.length && !profile ? 'invalid' : ''} disabled={!text && !profile} type="submit">Post</button>
            </form>
            </div>
        </section>
    );
};

export default Popup;
