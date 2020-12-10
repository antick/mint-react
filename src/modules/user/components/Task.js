/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import userActions from '../actions/userAction';

const Task = () => {
  const title = 'Tasks';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getAll());
  }, [dispatch]);

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
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
          <div className="bg-white rounded shadow p-6 m-4 w-full m-auto lg:w-6/12">
            <div className="mb-4">
              <h1 className="text-gray-900 font-medium text-2xl">Todo List</h1>
              <div className="flex mt-4">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" />
                <button className="flex-shrink-0 p-2 border-2 rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500">
                  Add
                </button>
              </div>
            </div>
            <div>
              <div className="flex mb-4 items-center">
                <p className="w-full text-gray-600">Hire the candidates for the profile as soon as possible</p>
                <button className="flex-shrink-0 p-2 ml-4 mr-2 border-2 rounded hover:text-white hover:bg-teal-500 text-green-500 border-teal-500 hover:border-teal-500">
                  Done
                </button>
                <button className="flex-shrink-0 p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">
                  Remove
                </button>
              </div>
              <div className="flex mb-4 items-center">
                <p className="w-full line-through text-green-500">Send the stats to the boss and get the reports done from the team</p>
                <button className="flex-shrink-0 p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-600y border-gray-200 hover:bg-gray-500">
                  Not Done
                </button>
                <button className="flex-shrink-0 p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Task;
