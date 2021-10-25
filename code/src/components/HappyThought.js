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
        console.log(data)
        refreshThoughts()
      })
  }

  return (
    <>
      {thoughts.map(thought => {
        return (
          <div className='thought-card' key={thought._id}>
            <p>{thought.message}</p>
            <button onClick={() => handleAddHeart(thought._id)}> ❤ {thought.hearts}</button>
            <p>Created at: {moment(thought.createdAt).fromNow()}</p>
          </div>
        )
      })}
    </>
  )
}
