import React, { useState, useEffect } from 'react'
import { HappyThought } from 'components/HappyThought'
import { PostThought } from 'components/PostThought'
import { Loader } from 'components/Loader'
import { API_URL, LIKES_API_URL } from 'utils/urls'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState('')
  const [loading, setLoading] = useState(true)
  const [typing, setTyping] = useState(false)

  useEffect(() => {
    refreshThoughts()
  }, [])

  const refreshThoughts = () => {
    setLoading(true)
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setThoughts(data)
      })
      .finally(() => setLoading(false))
  }

  const handleTyping = thinking => {
    setTyping(true)
    setNewThought(thinking)
  }

  const handleFormSubmit = e => {
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
        refreshThoughts()
        // setThoughts([data, ...thoughts])
        setNewThought('')
      })
  }

  const handleAddHeart = id => {
    const options = { method: 'POST' }
    fetch(LIKES_API_URL(id), options)
      .then(res => res.json())
      .then(data => {
        const updatedThoughts = thoughts.map(thought => {
          if (thought._id === data._id) {
            return { ...thought, hearts: (thought.hearts += 1) }
          } else {
            return thought
          }
        })
        setThoughts(updatedThoughts)
      })
  }

  const onClickRefresh = () => {
    refreshThoughts()
  }

  return (
    <>
      <div className='container'>
        <PostThought
          onFormSubmit={handleFormSubmit}
          newThought={newThought}
          typing={typing}
          onTyping={handleTyping}
        />
        {loading && <Loader />}
        {!loading && <HappyThought thoughts={thoughts} onAddHeart={handleAddHeart} />}
      </div>
      <button className='heart-button refresh' onClick={onClickRefresh}>
        &#8635;
      </button>
    </>
  )
}
