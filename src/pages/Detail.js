import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Detail.css'

const Detail = () => {
  const { id } = useParams();
  const posts = useSelector((state) => state.posts);
  const post = posts.find((post) => post.id === parseInt(id));
  const morePosts = posts.filter((p) => p.id !== post.id);

  if (!post) return <div>Loading...</div>;

  return (
    <div className='main-container'>
   
  <div className="detail-cont">
     
    
       <div className="image-container">
       <h2>Post Number: {post.id}</h2>
       <img className='large-image' src={`https://picsum.photos/200?random=${post.id}`} alt={`Image ${post.id}`} />
       </div>

       <div className="post-detail">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p>User ID: {post.userId}</p>
       </div>

  </div>

  <div className="more-posts">
        <h2>More Posts</h2>
        <ul className="more-post-list">
          {morePosts.slice(0, 5).map((morePost) => (
            <li key={morePost.id}>
              <Link to={`/item/${morePost.id}`}>
                <div className="more-post-item">
                  <div className="card">
                    <img src={`https://picsum.photos/50?random=${morePost.id}`} alt={`Image ${morePost.id}`} />
                    <div className="more-post-text">
                      <h3>{morePost.title}</h3>
                      <p>{`${morePost.body.slice(0, 20)}...`}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
   
 

  </div>
  );
};

export default Detail;
