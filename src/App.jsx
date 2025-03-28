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
        setPosts(data.results)
      })
      .catch(err => console.error('Error fetching data:', err));
  }
  return (
    //markup
    <>
      <h1>Ricette tradizionali</h1>
      <div className="container">
        <div className="row">

          {posts.map(post => (
            <div className="col-12" key={`post-${post.slug}`}>
              <h3>{post.title}</h3>
              <img src={post.image} alt={post.image} />
              <div>
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
