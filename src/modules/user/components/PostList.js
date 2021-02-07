import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import postsAction from '../actions/postAction';
import Breadcrumb from '../../shared/components/Breadcrumb';

const PostList = () => {
  const title = 'Posts';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsAction.fetchPosts());
  }, [dispatch]);

  const { loading, hasErrors, posts } = useSelector(state => state.postReducer);

  const renderPosts = () => {
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
    <main className="main-content">
      <Breadcrumb title={title} />

      <section className="flex flex-col justify-center m-auto">
        {renderPosts()}
      </section>
    </main>
  );
};

export default PostList;
