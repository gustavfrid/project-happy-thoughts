import React, { useState } from 'react'
import 'components/happyThought.css'

export const PostThought = ({ thoughts, setThoughts }) => {
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

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then(res => res.json())
      .then(data => setThoughts([data, ...thoughts]))
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
