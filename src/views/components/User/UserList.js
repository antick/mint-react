/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import userActions from '../../../actions/user.action';

const UserList = () => {
  const title = 'Users';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getAll());
  }, []);

  function handleDeleteUser(id) {
    dispatch(userActions.delete(id));
  }

  const users = useSelector(state => state.users);

  return (
    <section className="flex flex-col w-full text-gray-800 min-h-screen">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 bg-gray-100 rounded-xl mb-6 p-3">
        <div className="flex items-center space-x-2 text-gray-400 text-sm">
          <Link to="/" className="hover:underline hover:text-gray-600">Home</Link>
          <span>
            <svg className="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </span>
          <Link to="/users" className="hover:underline hover:text-gray-600">Users</Link>
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
          <div className="col-lg-8 offset-lg-2">
            <h1 className="text-xl">All registered users:</h1>
            {users.loading && <em>Loading users...</em>}
            {users.error && <span className="text-danger">ERROR: {users.error}</span>}
            {users.users && <ul>{users.users.results.map(userData => <li key={userData.id}>
              {`${userData.name}`}
              {
                // eslint-disable-next-line no-nested-ternary
                userData.deleting ? <em> - Deleting...</em>
                  : userData.deleteError
                    ? <span className="text-danger"> - ERROR: {userData.deleteError}</span>
                    : <span> - <button onClick={() => handleDeleteUser(userData.id)} className="text-primary">Delete</button></span>
              }
            </li>)}
            </ul>}
          </div>
        </div>
      </div>
      <div className="flex justify-center p-4">
        <button className="border border-teal-500 text-teal-500 block rounded-xl font-bold py-4 px-6 mr-2 flex
          items-center hover:bg-teal-500 hover:text-white">
          <svg className="h-5 w-5 mr-2 fill-current" version="1.1" x="0px" y="0px" viewBox="-49 141 512 512">
            <path d="M438,372H36.355l72.822-72.822c9.763-9.763,9.763-25.592,0-35.355c-9.763-9.764-25.593-9.762-35.355,0 l-115.5,115.5C-46.366,384.01-49,390.369-49,397s2.634,12.989,7.322,17.678l115.5,115.5c9.763,9.762,25.593,9.763,35.355,0 c9.763-9.763,9.763-25.592,0-35.355L36.355,422H438c13.808,0,25-11.193,25-25S451.808,372,438,372z" />
          </svg>
          Previous
        </button>
        <button
          className="border border-teal-500 bg-teal-500 text-white block rounded-xl font-bold py-4 px-6 ml-2 flex items-center">
          Next
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
