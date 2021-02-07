/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userActions from '../actions/userAction';
import Breadcrumb from '../../shared/components/Breadcrumb';

const UserList = () => {
  const title = 'Users';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getAll());
  }, [dispatch]);

  function handleDeleteUser(id) {
    dispatch(userActions.delete(id));
  }

  const users = useSelector(state => state.userReducer);

  return (
    <main className="main-content">
      <Breadcrumb title={title} />

      <section className="p-4">
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            {users.loading && <em>Loading users...</em>}
            {users.error && <span className="text-danger">ERROR: {users.error}</span>}

            <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th
                      className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Name
                    </th>
                    <th
                      className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Title
                    </th>
                    <th
                      className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Status
                    </th>
                    <th
                      className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Role
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"/>
                  </tr>
                </thead>

                <tbody className="bg-white bg-opacity-70">
                  {users.users && users.users.results.map(userData => <tr key={userData.id}>
                    <td className="px-6 py-5 whitespace-no-wrap border-b border-gray-200">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={'/images/avatar.jpg'} alt="user avatar"/>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm leading-5 font-medium text-gray-900">{`${userData.name}`}</div>
                          <div className="text-sm leading-5 text-gray-500">{`${userData.email}`}</div>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-5 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 text-gray-900">Software Engineer</div>
                      <div className="text-sm leading-5 text-gray-500">Web dev</div>
                    </td>

                    <td className="px-6 py-5 whitespace-no-wrap border-b border-gray-200">
                      <span
                        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                    </td>

                    <td className="px-6 py-5 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                      Owner
                    </td>

                    <td className="px-6 py-5 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                      {
                        // eslint-disable-next-line no-nested-ternary
                        userData.deleting ? <em> - Deleting...</em>
                          : userData.deleteError
                            ? <span className="text-danger"> - ERROR: {userData.deleteError}</span>
                            : <span><button onClick={() => handleDeleteUser(userData.id)} className="text-indigo-600 hover:text-indigo-900">Delete</button></span>
                      }
                    </td>
                  </tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button className="border border-teal-500 text-teal-500 block rounded-xl font-bold py-3 px-6 mr-2 flex items-center hover:bg-teal-500 hover:text-white">
            <svg className="h-4 w-4 mr-2 fill-current" version="1.1" x="0px" y="0px" viewBox="-49 141 512 512">
              <path d="M438,372H36.355l72.822-72.822c9.763-9.763,9.763-25.592,0-35.355c-9.763-9.764-25.593-9.762-35.355,0 l-115.5,115.5C-46.366,384.01-49,390.369-49,397s2.634,12.989,7.322,17.678l115.5,115.5c9.763,9.762,25.593,9.763,35.355,0 c9.763-9.763,9.763-25.592,0-35.355L36.355,422H438c13.808,0,25-11.193,25-25S451.808,372,438,372z" />
            </svg>
            Previous
          </button>
          <button className="border border-teal-500 bg-teal-500 text-white block rounded-xl font-bold py-3 px-6 ml-2 flex items-center">
            Next
            <svg className="h-4 w-4 ml-2 fill-current" x="0px" y="0px" viewBox="-49 141 512 512">
              <path d="M-24,422h401.645l-72.822,72.822c-9.763,9.763-9.763,25.592,0,35.355c9.763,9.764,25.593,9.762,35.355,0
          l115.5-115.5C460.366,409.989,463,403.63,463,397s-2.634-12.989-7.322-17.678l-115.5-115.5c-9.763-9.762-25.593-9.763-35.355,0
          c-9.763,9.763-9.763,25.592,0,35.355l72.822,72.822H-24c-13.808,0-25,11.193-25,25S-37.808,422-24,422z" />
            </svg>
          </button>
        </div>
      </section>
    </main>
  );
};

export default UserList;
