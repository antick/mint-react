/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import postsAction from '../../actions/posts.action';

const UserList = () => {
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
        <div key={post.id} className={`flex md:flex-row flex-col bg-${pickRandomColor}-200 justify-center md:text-left text-center`}>
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
      <div className="bg-gray-100 rounded-xl mb-6">
        <h1 className="font-bold text-2xl text-center tracking-wider p-4">{title}</h1>
      </div>
      <div>
        <div className="flex flex-col justify-center m-auto">
          {renderPosts()}
        </div>
      </div>
      <div className="flex justify-center p-6">
        <button
          className="border border-teal-500 text-teal-500 block rounded-sm font-bold py-4 px-6 mr-2 flex
            items-center hover:bg-teal-500 hover:text-white">
          <svg className="h-5 w-5 mr-2 fill-current" version="1.1" x="0px" y="0px" viewBox="-49 141 512 512">
            <path d="M438,372H36.355l72.822-72.822c9.763-9.763,9.763-25.592,0-35.355c-9.763-9.764-25.593-9.762-35.355,0 l-115.5,115.5C-46.366,384.01-49,390.369-49,397s2.634,12.989,7.322,17.678l115.5,115.5c9.763,9.762,25.593,9.763,35.355,0 c9.763-9.763,9.763-25.592,0-35.355L36.355,422H438c13.808,0,25-11.193,25-25S451.808,372,438,372z" />
          </svg>
          Previous page
        </button>
        <button
          className="border border-teal-500 bg-teal-500 text-white block rounded-sm font-bold py-4 px-6 ml-2 flex items-center">
          Next page
          <svg className="h-5 w-5 ml-2 fill-current" x="0px" y="0px" viewBox="-49 141 512 512">
            <path d="M-24,422h401.645l-72.822,72.822c-9.763,9.763-9.763,25.592,0,35.355c9.763,9.764,25.593,9.762,35.355,0
          l115.5-115.5C460.366,409.989,463,403.63,463,397s-2.634-12.989-7.322-17.678l-115.5-115.5c-9.763-9.762-25.593-9.763-35.355,0
          c-9.763,9.763-9.763,25.592,0,35.355l72.822,72.822H-24c-13.808,0-25,11.193-25,25S-37.808,422-24,422z" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default UserList;
