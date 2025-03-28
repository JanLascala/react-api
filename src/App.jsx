import { useState, useEffect } from 'react'

const api_posts = 'http://localhost:3000/api/v1/posts';

function App() {

  useEffect(() => {
    fetchdata(api_posts);
  }, [])

  fetch(api_posts)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })

}

export default App
