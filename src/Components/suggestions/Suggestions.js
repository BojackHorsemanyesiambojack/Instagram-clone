import React from 'react'
import { Avatar } from '@mui/material'
import './Suggestions.css'

function Suggestions({user,userImage}) {
  return (
    <div className='suggestions'>
        <div className='sugestion-user'>
            <div className='username-left'>
                <span class='avatar'>
                    <Avatar></Avatar>
                </span>
                <div className='username-info'>
                    <span className='username'>Frander Jose</span>
                    <span className='relation'>New to instagram</span>
                </div>
            </div>
            <button className='follow'>Follow</button>
        </div>
    </div>
  )
}

export default Suggestions