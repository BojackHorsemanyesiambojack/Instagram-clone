import React from 'react'
import './Sidenav.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu } from '@mui/material';
import CreatorForm from './creatorForm';

function Sidenav() {
  return (
    <div className='sidenav'>
              <img
        className="sidenav__logo"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram Logo"
      />
        <div className='sidenav-button-container'>
        <div className='sidenav-button'>
        <div className='button'>
            <HomeIcon />
            <span>Home</span>
        </div>
      </div>
      <div className='sidenav-button'>
        <div className='button'>
            <SearchIcon />
            <span>Search</span>
        </div>
      </div>
      <div className='sidenav-button'>
        <div className='button'>
            <ExploreIcon />
            <span>Explore</span>
        </div>
      </div>
      <div className='sidenav-button'>
        <div className='button'>
            <SlideshowIcon />
            <span>Reels</span>
        </div>
      </div>
      <div className='sidenav-button'>
        <div className='button'>
            <ChatIcon />
            <span>Chat</span>
        </div>
      </div>
      <div className='sidenav-button'>
        <div className='button'>
            <FavoriteBorderIcon />
            <span>Notifications</span>
        </div>
      </div>
      <div className='sidenav-button'>
        <div className='button'>
            <AddCircleIcon />
            <span>Create</span>
        </div>
      </div>
      <div className='sidenav-button'>
        <div className='button menu'>
            <MenuIcon />
            <span>Menu</span>
        </div>
      </div>
        </div>
    </div>
  )
}

function openCreatorForm(){
    return(<CreatorForm />)
}

export default Sidenav