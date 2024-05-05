import React, { useState } from 'react'
import './Timeline.css'
import Suggestions from '../suggestions/Suggestions'
import Posts from './Posts'

function Timeline() {

    const [posts, setPosts] = useState ([
        {
        user:"Kevin Molina",
        postImage : 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
        timeAgo : '2d',
        likes : 300
        }
    ])

  return (
    <div className='timeline'>
        <div className='timeline_left'>
            <div className='timeline-post'>
                {posts.map((post) => (
                    <Posts user = {post.user} 
                    postImage = {post.postImage} 
                    timeAgo = {post.timeAgo}
                    likes = {post.likes}/>
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