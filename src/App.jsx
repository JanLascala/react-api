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

                <img className='food_pics' src={post.image} alt={post.image} />

              </div>
              <div className='p-3 bg-secondary border border-warning text-light'>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <button type="button" class="btn btn-lg btn-outline-danger bg-danger text-light">
                  <i class="bi bi-trash-fill"></i>
                </button>

              </div>
            </div>))
          }


        </div>
      </div>
    </>
  )


}

export default App
