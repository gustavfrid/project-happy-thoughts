import React from 'react'
import 'components/postThought.css'

export const PostThought = ({ onFormSubmit, newThought, typing, onTyping }) => {
  return (
    <div className='thought-card post-thought-card'>
      <form id='postThoughtForm' onSubmit={onFormSubmit}>
        <label className='thought-heading'>What's making you happy right now?</label>
        <textarea
          className='thought-input'
          id='newThought'
          type='text'
          maxLength='140'
          rows='4'
          value={newThought}
          onChange={e => onTyping(e.target.value)}
        />
        <button
          className={
            typing && newThought.length >= 5 ? 'button post-button typing' : 'button post-button'
          }
          type='submit'
          disabled={!(newThought.length >= 5 && newThought.length <= 140)}>
          <span className='red-heart'>❤</span> Send Happy Thought{' '}
          <span className='red-heart'>❤</span>
        </button>
      </form>
    </div>
  )
}
