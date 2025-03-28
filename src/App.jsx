import { useState, useEffect } from 'react'

const api_posts = 'http://localhost:3000/api/v1/posts';

function App() {

  //this is to not repeat ad infinitum
  useEffect(() => {
    fetchdata(api_posts);
  }, [])
  //here i fetch the data 
  function fetchdata(url = api_posts) {
    console.log('this is data from bakery', url);

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => console.error('Error fetching data:', err));
  }
  return (
    //markup
    <>
      <h1>Ricette tradizionali</h1>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>title</h3>
            <img src="" alt="" /><span>here the img</span>
            <div>
              <p>description</p>
              <p>tags</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )


}

export default App
