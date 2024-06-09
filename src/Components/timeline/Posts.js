import React, {useState} from 'react'
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './Post.css';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function Posts({user, postImage, timeAgo, likes, text}) {
    const pattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;

    const [likesCount, setLikesCount] = useState(0 + likes);

    const [liked,  setLiked] = useState(false);

    const postLiked = () => {
        if(liked == false){
            setLikesCount (likes +1);
            setLiked(true);
        }else{
        setLiked(false);
        setLikesCount(likes --);
        }
    }

  return (
    <div className='posts'>
        <div className='post-header'>
            <div className='post-header-author'>
                <Avatar>{user[0]}</Avatar>
                <p>{user}</p>  {"   "}<span className='date'>{timeAgo}</span>
            </div>
            <MoreHorizIcon/>
        </div>
        <div className='post-image'>
            <img src={pattern.test(postImage)? postImage : URL.createObjectURL(postImage)} />
        </div>
        <div className='desc'>
            <p>{text}</p>
        </div>
        <div className='post-foot'>
            <div className='post-foot-icons'>
                <span className='icon' onClick={postLiked}>
                    <FavoriteBorder className='like'/>
                </span>
                <ChatBubbleIcon  className='icon'/>
                <TelegramIcon className='icon'/>
                <BookmarkIcon  className='icon'/>
            </div>
            <p>Liked by {likesCount} people</p>
        </div>
        </div>
  )
}

export default Posts