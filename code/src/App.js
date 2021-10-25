import React, { useState, useEffect } from 'react'
import { HappyThought } from 'components/HappyThought'
import { PostThought } from 'components/PostThought'

export const App = () => {
  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then(res => res.json())
      .then(data => setThoughts(data))
  }, [])
  console.log(thoughts)
  return (
    <div className='container'>
      <PostThought thoughts={thoughts} setThoughts={setThoughts} />
      <HappyThought thoughts={thoughts} />
    </div>
  )
}
