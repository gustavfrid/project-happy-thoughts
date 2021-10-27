import React from 'react'
import moment from 'moment'
import 'components/happyThought.css'

export const HappyThought = ({ thoughts, onAddHeart }) => {
  return (
    <>
      {thoughts.map(thought => {
        return (
          <div className='thought-card' key={thought._id}>
            <p className='thought-heading'>{thought.message}</p>
            <button className='button heart-button' onClick={() => onAddHeart(thought._id)}>
              ❤
            </button>
            <p className='heart-number'>
              <span className='hearts-x'> &#10005;</span> {thought.hearts}
            </p>
            <p className='time'>{moment(thought.createdAt).fromNow()}</p>
          </div>
        )
      })}
    </>
  )
}
