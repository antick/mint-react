import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import postsAction from '../../../store/actions/posts.action';

const PostList = () => {
  const title = 'Posts';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsAction.fetchPosts());
  }, [dispatch]);

  const renderPosts = () => {
    const { loading, hasErrors, posts } = useSelector(state => state.posts);

    if (loading) {
      return <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
      </div>;
    }

    if (hasErrors) {
      return <p>No posts available!</p>;
    }

    const colors = [
      'teal',
      'yellow',
      'indigo',
      'pink',
      'gray',
      'red',
      'green',
      'blue',
      'purple'
    ];

    return posts.map(post => {
      const pickRandomColor = colors[Math.floor(Math.random() * colors.length)];

      return (
        <div
          key={post.id}
          className={`flex md:flex-row flex-col bg-${pickRandomColor}-200 justify-center md:text-left text-center`}>
          <div className="flex flex-col justify-center items-center relative">
            <div className="w-56 h-12 md:flex hidden justify-center">
              <div className={`h-full border-${pickRandomColor}-300 border-dashed`} />
            </div>
            <div className={`rounded-full w-12 h-12 text-xl text-${pickRandomColor}-100 bg-${pickRandomColor}-700
            font-black flex justify-center items-center absolute top-0 right-0 mt-16 shadow-lg mr-2`}>{post.id}</div>
            <img
              src="https://image.flaticon.com/icons/svg/1330/1330216.svg"
              className="w-56 h-56 rounded-full shadow my-5 object-scale-down"
              alt={post.title}
            />
            <div className="w-56 h-12 md:flex hidden justify-center">
              <div className={`h-full border-r-4 border-${pickRandomColor}-300 border-dashed`} />
            </div>
          </div>
          <div className={`ml-5 p-10 flex flex-col justify-center max-w-2xl rounded bg-${pickRandomColor}-200`}>
            <div className={`text-xs uppercase font-bold text-${pickRandomColor}-500`}>Post {post.id}</div>
            <div className={`md:text-3xl text-xl font-bold text-${pickRandomColor}-700`}>{post.title}</div>
            <div className={`mt-4 text-${pickRandomColor}-800`}>{post.body}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <section className="flex flex-col w-full text-gray-800 min-h-screen">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 bg-gray-100 rounded-xl mb-6 p-3">
        <div className="flex items-center space-x-2 text-gray-400 text-sm">
          <a href="/" className="hover:underline hover:text-gray-600">Home</a>
          <span>
            <svg className="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </span>
          <a href={'/users'} className="hover:underline hover:text-gray-600">Users</a>
          <span>
            <svg className="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </span>
          <span>{title}</span>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-center m-auto">
          {renderPosts()}
        </div>
      </div>
    </section>
  );
};

export default PostList;
