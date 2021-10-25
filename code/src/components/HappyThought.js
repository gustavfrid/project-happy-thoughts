import React from 'react'
import moment from 'moment'
import { API_URL } from 'utils/urls'
import 'components/happyThought.css'

export const HappyThought = ({ thoughts, refreshThoughts }) => {
  const handleAddHeart = id => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }
    fetch(`${API_URL}/${id}/like`, options)
      .then(res => res.json())
      .then(data => {
        console.log('[<3 like thought]', data)
        refreshThoughts()
      })
  }

  return (
    <>
      {thoughts.map(thought => {
        return (
          <div className='thought-card' key={thought._id}>
            <p className='thought-heading'>{thought.message}</p>
            <button className='button heart-button' onClick={() => handleAddHeart(thought._id)}>
              ❤
            </button>
            <p className='heart-number'>x {thought.hearts}</p>
            <p className='time'>{moment(thought.createdAt).fromNow()}</p>
          </div>
        )
      })}
    </>
  )
}
