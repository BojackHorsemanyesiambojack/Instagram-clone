import React, { useState } from 'react';
import './creatorForm.css';
import CollectionsIcon from '@mui/icons-material/Collections'
import CloseIcon from '@mui/icons-material/Close';;

function CreatorForm(props) {

  const thisForm = document.getElementById('thisForm')

  const [likes, setLikes] = useState(0);

  const [formData, setFormData] = useState({
    user:"You",
      postImage : null,
      timeAgo : '1h',
      likes : 0,
      text:''
  })

const addToGeneralPosts = (e) => {
  e.preventDefault();
  const postUpdate = [formData, ...props.posts];
  props.setPosts(postUpdate);
  setFormData({
    user: '',
    postImage: null,
    timeAgo: '',
    text: '',
    likes:likes
  });
  props.hide();
  console.log(postUpdate)
}

const isImageNull = formData.postImage == null;

  const handleChange = (e) =>{
    e.preventDefault()
    const {name,files,value} = e.target;
    setFormData(prev => (
      {...prev, [name] : name === 'postImage'? files[0] : value})
    )
  }

  return (
    <div className='creatorForm' id='thisForm'>
      <div className='close-icon but' onClick={closeCreatForm}>
      <CloseIcon fontSize='large'/>
      </div>
        <form class='makingPost' name='making-post' id = "making-post">
          <div className='text'>
          <span>Crea una nueva publicacion</span>
          </div>
          <div className='dec-container'>
            <CollectionsIcon fontSize='large'/>
            <span>Arrastra las fotos o videos Aqui</span>
          </div>
            <label form='input-file' className='send-file-button'>Seleccionar del ordenador
              <input type='file' className='button-file' id='input-file' accept='image/*' 
              onChange={handleChange} name='postImage' required
               />
              </label>
              <textarea id='editor' className='editor-input' name='text' value={formData.text}
              onChange={handleChange} disabled = {isImageNull}>
              </textarea>

              <button onClick={addToGeneralPosts} type = 'submit'
               class = {isImageNull? 'send-file-button disabled-but' : 'send-file-button'}
              disabled = {isImageNull}
              >Submit</button>
        </form>
        
    </div>
  )
}

function closeCreatForm(){
  const creatorForm = document.getElementById('creat-form')
  creatorForm.style.display = 'none';
}

export default CreatorForm