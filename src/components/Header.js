import React, { useState, useContext } from 'react';
import { DataContext } from '../context/Context';

const Header = () => {
    const value = useContext(DataContext);
    const { data, setSearchText, searchText, setSearchedPosts } = value;
    const [showNav, setShowNav] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        let posts = [];
        data.map(obj => (obj.text.search(searchText) !== -1 ? posts.push(obj) : null))

        setSearchedPosts([...posts]);
    }

    return (
        <header>
            <div className="wrapper">
                <div className="logo">
                <h1><a className="brand" href="/" title="Facebook">fb</a></h1>
                <form action="#FIXME" method="GET" id="searchForm" onSubmit={handleSubmit}>
                    <div>
                    <button className="icon" type="submit">search</button>
                    <input type="text" placeholder="Search Facebook" id="search" onChange={e => setSearchText(e.target.value)} />
                    </div>
                </form>
                </div>
                <span className='menu icon' onClick={() => setShowNav(!showNav)}>menu</span>
                <nav className={showNav ? 'showNav' : null}>
                <ul>
                    <li className="active"><a className="icon" href="#FIXME" title="Home">Home</a></li>
                    <li><a className="icon" href="#FIXME" title="Watch">Watch</a></li>
                    <li><a className="icon" href="#FIXME" title="Marketplace">Marketplace</a></li>
                    <li><a className="icon" href="#FIXME" title="Groups">Groups</a></li>
                    <li><a className="icon" href="#FIXME" title="Gaming">Gaming</a></li>
                </ul>
                <div className="links">
                    <a href="#FIXME" title="Username">
                    <span className="icon user">user</span>
                    <h2>Vishrut</h2>
                    </a>
                    <ul>
                    <li><a className="icon" href="#FIXME" title="Create">Create</a></li>
                    <li><a className="brand" href="#FIXME" title="Messenger">Messenger</a></li>
                    <li><a className="icon" href="#FIXME" title="Noti">Noti</a></li>
                    <li><a className="icon" href="#FIXME" title="Account">Drop</a></li>
                    </ul>
                </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
