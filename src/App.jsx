import { useState, useEffect } from 'react'

const api_posts = 'http://localhost:3000/api/v1/posts';

function App() {

  useEffect(() => {
    fetchdata(api_posts);
  }, [])

  function fetchdata(url = api_posts) {
    console.log('this is data from bakery', url);

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => console.error('Error fetching data:', err));
  }


}

export default App
