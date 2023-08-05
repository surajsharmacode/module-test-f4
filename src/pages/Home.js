import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/actions/action';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const error = useSelector((state) => state.error);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <div>
      <h1>Social Media For Travellers</h1>
      {error && <div className="error-message">{error}</div>}
      <div className="post-list">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <img src={`https://picsum.photos/200?random=${post.id}`} alt={`Image ${post.id}`} />
            <div className="post-details">
               <h3>post Title</h3>
              <p className='post-title'>{post.title}</p>
              <p className='post-body'>{`${post.body.slice(0, 100)}...`}</p>
              <Link to={`/item/${post.id}`}>Read More...</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;
