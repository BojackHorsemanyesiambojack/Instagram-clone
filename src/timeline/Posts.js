import React from 'react'
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './Post.css';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function Posts({user, postImage, timeAgo, likes}) {
  return (
    <div className='posts'>
        Posts
        <div className='post-header'>
            <div className='post-header-author'>
                <Avatar>{user[0]}</Avatar>
                <p>{user}</p>  {"   "}<span>{timeAgo}</span>
            </div>
            <MoreHorizIcon/>
        </div>
        <div className='post-image'>
            <img src={postImage} />
        </div>
        <div className='post-foot'>
            <div className='post-foot-icons'>
                <FavoriteBorder className='icon'/>
                <ChatBubbleIcon  className='icon'/>
                <TelegramIcon className='icon'/>
                <BookmarkIcon  className='icon'/>
            </div>
            <p>Liked by {likes} people</p>
        </div>
        </div>
  )
}

export default Posts