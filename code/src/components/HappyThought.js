import React from 'react'
import moment from 'moment'
import 'components/happyThought.css'

export const HappyThought = ({ thoughts }) => {
  return (
    <>
      {thoughts.map(thought => {
        return (
          <div className='thought-card' key={thought._id}>
            <p>{thought.message}</p>
            <button>&hearts; {thought.hearts}</button>
            <p>Created at: {moment(thought.createdAt).fromNow()}</p>
          </div>
        )
      })}
    </>
  )
}
