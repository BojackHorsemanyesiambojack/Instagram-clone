import React, {useState} from 'react'
import Sidenav from './navigation/Sidenav'
import Timeline from './timeline/Timeline'
import  './Homepage.css'
import CreatorForm from './navigation/creatorForm'

function Homepage() {

  const hideForm = () =>{
    document.getElementById('creat-form').style.display = 'none';
  }

  const [posts, setPosts] = useState([
    {
      user:"Kevin Molina",
      postImage : 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
      timeAgo : '2d',
      likes : 0,
      text:'Hola soy kevin'
      }
  ]);

  return (
    <div className='homepage'>
      <div className='creator' id='creat-form'>
            <CreatorForm posts = {posts} setPosts = {setPosts}  hide = {hideForm}/>
            </div>
        <div className='homepage_nav'>
            <Sidenav />
        </div>
        <div className='homepage_timeline'>
            <Timeline posts = {posts}/>
        </div>
    </div>
  )
}

export default Homepage