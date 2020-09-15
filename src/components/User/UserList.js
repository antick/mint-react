import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../../actions/postsActions';

const propTypes = {
  dispatch: PropTypes.any,
  loading: PropTypes.bool,
  posts: PropTypes.array,
  hasErrors: PropTypes.bool
};

const UserList = ({
  dispatch, loading, posts, hasErrors
}) => {
  const title = 'Users';

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderPosts = () => {
    if (loading) {
      return <p>Loading posts...</p>;
    }

    if (hasErrors) {
      return <p>Damn! No posts!</p>;
    }

    return posts.map(post => (<div key={post.id}>{post.body}</div>));
  };

  return (
    <section className="flex flex-col w-full text-gray-800 min-h-screen">
      <h1 className="text-4xl">{title}</h1>
      <div>
        {renderPosts()}
      </div>
    </section>
  );
};

UserList.propTypes = propTypes;

const mapStateToProps = state => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors
});

export default connect(mapStateToProps)(UserList);
