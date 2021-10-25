import React, { useState } from 'react'
import { API_URL } from 'utils/urls'
import 'components/happyThought.css'

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
        <label>Type your thought</label>
        <input
          id='newThought'
          type='text'
          value={newThought}
          onChange={e => setNewThought(e.target.value)}
        />
        <button type='submit'>Send thought!</button>
      </form>
    </div>
  )
}
