import React, { useState, useEffect } from 'react'
import './styles.scss'

const Posts = () => {
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => setItems(json))
  }, [resourceType])

  return (
    <>
      <section className="posts">
        <div className="buttons">
          <button className="button" onClick={() => setResourceType('posts')}>posts</button>
          <button className="button" onClick={() => setResourceType('users')}>users</button>
          <button className="button" onClick={() => setResourceType('comments')}>comments</button>
        </div>
        <h1>{resourceType}</h1>
        {items.map(item => {
          return <pre>{JSON.stringify(item)}</pre>
        })}
      </section>
    </>
  )
}


export default Posts