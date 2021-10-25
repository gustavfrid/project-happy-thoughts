import React, { useState, useEffect } from 'react'
import { HappyThought } from 'components/HappyThought'
import { PostThought } from 'components/PostThought'
import { API_URL } from 'utils/urls'

export const App = () => {
  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log('[useEffect]', data)
        setThoughts(data)
      })
  }, [])

  const refreshThoughts = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log('[refresh thought]', data)
        setThoughts(data)
      })
  }

  return (
    <div className='container'>
      <PostThought
        refreshThoughts={refreshThoughts}
        setThoughts={setThoughts}
        thoughts={thoughts}
      />
      <HappyThought thoughts={thoughts} refreshThoughts={refreshThoughts} />
    </div>
  )
}
