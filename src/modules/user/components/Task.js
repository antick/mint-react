/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../actions/userAction';
import Breadcrumb from '../../shared/components/Breadcrumb';

const Task = () => {
  const title = 'Tasks';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getAll());
  }, [dispatch]);

  return (
    <main className="main-content">
      <Breadcrumb title={title} />

      <section className="p-4 h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white bg-opacity-70 rounded shadow p-6 m-4 w-full m-auto lg:w-6/12">
          <div className="mb-4">
            <h1 className="text-gray-900 font-medium text-2xl">To Do List</h1>
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
      </section>
    </main>
  );
};

export default Task;
