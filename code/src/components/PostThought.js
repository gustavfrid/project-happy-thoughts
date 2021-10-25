import React, { useState } from 'react'
import { API_URL } from 'utils/urls'
import 'components/postThought.css'

export const PostThought = ({ refreshThoughts, setThoughts, thoughts }) => {
  const [newThought, setNewThought] = useState('')

  const onFormSubmit = e => {
    e.preventDefault()
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newThought }),
    }

    fetch(API_URL, options)
      .then(res => res.json())
      .then(data => {
        console.log('[post thought]', data)
        refreshThoughts()
        setThoughts([data, ...thoughts])
        setNewThought('')
      })
  }

  return (
    <div className='thought-card'>
      <form onSubmit={onFormSubmit}>
        <label className='thought-heading'>What's making you happy right now?</label>
        <textarea
          className='thought-input'
          id='newThought'
          type='text'
          maxLength='140'
          rows='4'
          value={newThought}
          onChange={e => setNewThought(e.target.value)}
        />
        <button
          className='button post-button'
          type='submit'
          disabled={!(newThought.length >= 5 && newThought.length <= 140)}>
          ❤ Send Happy Thought ❤
        </button>
      </form>
    </div>
  )
}
