import React, { useState } from 'react'
import './Timeline.css'
import Suggestions from '../suggestions/Suggestions'
import Posts from './Posts'

function Timeline(props) {

  return (
    <div className='timeline'>
        <div className='timeline_left'>
            <div className='timeline-post'>
                {props.posts.map((post) => (
                    <Posts user = {post.user} 
                    postImage = {post.postImage} 
                    timeAgo = {post.timeAgo}
                    likes = {post.likes}
                    text = {post.text}
                    />
                ))}
            </div>
        </div>
        <div className='timeline_right'>
            <Suggestions />
        </div>
    </div>
  )
}

export default Timeline