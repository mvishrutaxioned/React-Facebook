import React from 'react';

const Header = () => {
  return (
    <header>
        <div class="wrapper">
        <div class="logo">
            <h1><a class="brand" href="/" title="Facebook">fb</a></h1>
            <form action="#FIXME" method="GET" id="searchForm">
            <div>
                <button class="icon" type="submit">search</button>
                <input type="text" placeholder="Search Facebook" id="search" />
            </div>
            </form>
        </div>
            <nav>
            <ul>
                <li class="active"><a class="icon" href="#FIXME" title="Home">Home</a></li>
                <li><a class="icon" href="#FIXME" title="Watch">Watch</a></li>
                <li><a class="icon" href="#FIXME" title="Marketplace">Marketplace</a></li>
                <li><a class="icon" href="#FIXME" title="Groups">Groups</a></li>
                <li><a class="icon" href="#FIXME" title="Gaming">Gaming</a></li>
            </ul>
            </nav>
            <div class="links">
            <a href="#FIXME" title="Username">
                <span class="icon user">user</span>
                <h2>Vishrut</h2>
            </a>
            <ul>
                <li><a class="icon" href="#FIXME" title="Create">Create</a></li>
                <li><a class="brand" href="#FIXME" title="Messenger">Messenger</a></li>
                <li><a class="icon" href="#FIXME" title="Noti">Noti</a></li>
                <li><a class="icon" href="#FIXME" title="Account">Drop</a></li>
            </ul>
            </div>
        </div>
    </header>
  );
};

export default Header;
