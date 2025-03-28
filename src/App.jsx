import { useState, useEffect } from 'react'

const api_posts = 'http://localhost:3000/api/v1/posts';

function App() {
  const [posts, setPosts] = useState([])

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
        setPosts(data)
      })
      .catch(err => console.error('Error fetching data:', err));
  }
  return (
    //markup
    <>
      <h1 className='text-center p-3'>Ricette tradizionali</h1>
      <div className="container">
        <div className="row">

          {posts.map(post => (
            <div className="col-12 d-flex justify-content-center align-items-center" key={`post-${post.slug}`}>

              <div className='p-3'>

                <img src={post.image} alt={post.image} />

              </div>
              <div className='p-3'>
                <h3>{post.title}</h3>
                <p>{post.content}</p>

              </div>
            </div>))
          }


        </div>
      </div>
    </>
  )


}

export default App
