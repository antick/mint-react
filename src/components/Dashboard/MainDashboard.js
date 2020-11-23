import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  XAxis, YAxis,
  Area, AreaChart,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';
import CheckBox from '../shared/CheckBox';
import SvgIcon from '../shared/SvgIcon';
import userActions from '../../actions/user.action';

const MainDashboard = () => {
  const users = useSelector(state => state.users);

  const dispatch = useDispatch();

  function handleDeleteUser(id) {
    dispatch(userActions.delete(id));
  }

  const data = [
    {
      name: 'Jan', uv: 4000, pv: 2400, amt: 2400
    },
    {
      name: 'Feb', uv: 3000, pv: 1398, amt: 2210
    },
    {
      name: 'Mar', uv: 2000, pv: 9800, amt: 2290
    },
    {
      name: 'Apr', uv: 2780, pv: 3908, amt: 2000
    },
    {
      name: 'May', uv: 1890, pv: 4800, amt: 2181
    },
    {
      name: 'Jun', uv: 2390, pv: 3800, amt: 2500
    },
    {
      name: 'Jul', uv: 3490, pv: 4300, amt: 2100
    },
    {
      name: 'Aug', uv: 2200, pv: 4120, amt: 1800
    },
    {
      name: 'Sep', uv: 1100, pv: 2260, amt: 1800
    },
    {
      name: 'Oct', uv: 2100, pv: 1780, amt: 1800
    },
    {
      name: 'Nov', uv: 2800, pv: 3200, amt: 1800
    },
    {
      name: 'Dec', uv: 1600, pv: 4800, amt: 1800
    }
  ];

  const today = new Date().toDateString();

  return (
    <div className="mb-10">
      <div className="flex">
        <div className="w-2/3 font-sans bg-gray-100 border border-gray-200 rounded-lg text-gray-700 h-64">
          <div className="flex">
            <div className="flex flex-col p-8 w-3/4">
              <h3 className="text-xl font-semibold">Good Morning!</h3>
              <p className="pt-3 text-sm text-gray-700">
                Today is <em>{today}</em> and it is time to do something good with your life!
                Build stuff, help people, solve problems, learn new stuff, exercise, meditate. Just do it!
              </p>
              <p className="pt-3 text-sm text-gray-700 italic">
                “You measure the size of the accomplishment by the obstacles you had to overcome to reach your goals.”
              </p>
              <p className="pt-3 text-sm text-gray-700 italic">
                – Booker T. Washington
              </p>
            </div>

            <div className="weather-widget flex flex-col rounded-lg my-6 mr-6 p-8 bg-red-300 text-white w-2/4">
              <div className="flex font-semibold">
                Weather today in Olympus, Mars
              </div>
              <div className="flex flex-row pt-4 justify-center">
                <div>
                  <SvgIcon name="air" classes="w-20 h-20 text-white" />
                  <span className="p-4">Windy</span>
                </div>
                <div className="pt-3 pl-10 text-4xl font-semibold">
                  40 / 28 °C
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wod-widget w-1/3 font-sans border border-gray-200 rounded-lg text-gray-100 h-64 ml-6 -mr-6">
          <div className="p-8">
            <div className="font-semibold text-left text-gray-100">
              Word of the Day
            </div>
            <div className="ml-8">
              <div className="font-semibold italic mt-5">
                Repeat
              </div>
              <div className="text-sm ml-4 mt-3">
                Make or do or perform again
              </div>
              <div className="mt-8 text-sm italic text-gray-200">
                Example:
                <p className="ml-4 mt-3">
                  They plan to repeat the experiment every month
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-6">
        <div className="w-2/3 font-sans text-gray-700">
          <div className="flex border bg-white border-gray-200 rounded-lg h-48">
            <div className="flex flex-col p-8 pt-6 w-3/4">
              <h3 className="text-xl font-semibold">
                This week <span className="text-sm items-center flex text-gray-600 font-normal">18 May - 24 May</span>
              </h3>
              <div className="flex flex-row pt-2 text-md">
                <div className="text-sm border-r border-gray-300 py-4 px-8 pl-1 text-gray-600">
                  Mon
                  <p className="text-center">18</p>
                </div>
                <div className="text-sm border-r border-gray-300 py-4 px-8 text-gray-600">
                  Tue
                  <p className="text-gray-600 text-center">
                    19
                  </p>
                </div>
                <div className="text-sm border-r font-semibold border-gray-300 py-4 px-8 text-green-500">
                  Wed
                  <p className="text-center">20</p>
                </div>
                <div className="text-sm border-r border-gray-300 py-4 px-8 text-gray-600">
                  Thu
                  <p className="text-center">21</p>
                </div>
                <div className="text-sm border-r border-gray-300 py-4 px-8 text-gray-600">
                  Fri
                  <p className="text-center">22</p>
                </div>
                <div className="text-sm border-r border-gray-300 py-4 px-8 text-gray-600">
                  Sat
                  <p className="text-center">23</p>
                </div>
                <div className="text-sm py-4 px-8 text-gray-600">
                  Sun
                  <p className="text-center">24</p>
                </div>
              </div>
            </div>

            <div className="today-event-widget">
              <div className="font-semibold text-sm text-gray-700">
                Today&rsquo;s Events
              </div>
              <div className="flex flex-row pt-3 text-xs justify-end">
                <ul className="leading-7">
                  <li>Meeting with Brad.</li>
                  <li>Birthday party in evening.</li>
                </ul>
              </div>
              <div className="text-xs text-gray-500 pt-2">
                <a href="../User">More...</a>
              </div>
            </div>
          </div>
          <div className="flex border mt-6 bg-white border-gray-200 rounded-lg">
            <div className="flex flex-col p-8 w-full">
              <div className="font-semibold">Monthly Growth</div>
              <div className="pt-3 text-sm w-full h-64">
                <ResponsiveContainer>
                  <AreaChart
                    data={data}
                    margin={{
                      top: 10, right: 30, left: 0, bottom: 0
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke-="#5db7a0" fill="#5db7a0" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 font-sans bg-white border border-gray-200 rounded-lg text-gray-700 ml-6 -mr-6">
          <div className="p-8">
            <div className="font-semibold text-left">
              Today&apos;s Todo List
            </div>
            <div className="text-sm ml-4 mt-5 text-gray-600">
              <ul>
                <li className="py-2">
                  <label className="flex justify-start items-start">
                    <CheckBox />
                    <div className="select-none">
                      Make the design responsive.
                    </div>
                  </label>
                </li>
                <li className="py-2">
                  <label className="flex justify-start items-start">
                    <CheckBox />
                    <div className="select-none">
                      Do your dishes before you are thrown out of your house.
                    </div>
                  </label>
                </li>
                <li className="py-2">
                  <label className="flex justify-start items-start">
                    <CheckBox />
                    <div className="select-none">
                      Learn Next.js and build something.
                    </div>
                  </label>
                </li>
                <li className="py-2">
                  <label className="flex justify-start items-start">
                    <CheckBox />
                    <div className="select-none">
                      Call your best friend and tell him that he is an idiot.
                    </div>
                  </label>
                </li>
                <li className="py-2">
                  <label className="flex justify-start items-start">
                    <CheckBox />
                    <div className="select-none">
                      Prepare the presentation slides for tomorrow.
                    </div>
                  </label>
                </li>
              </ul>
            </div>

            <div className="font-semibold text-left mt-5 text-red-500">
              Overdue
            </div>
            <div className="text-sm ml-4 mt-5 text-gray-600">
              <ul>
                <li className="py-2">
                  <label className="flex justify-start items-start">
                    <CheckBox />
                    <div className="select-none">
                      Throw out the smelly trash.
                    </div>
                  </label>
                </li>
                <li className="py-2">
                  <label className="flex justify-start items-start">
                    <CheckBox />
                    <div className="select-none">
                      Break up with your girlfriend.
                    </div>
                  </label>
                </li>
                <li className="py-2">
                  <label className="flex justify-start items-start">
                    <CheckBox />
                    <div className="select-none">
                      Buy a new headphone.
                    </div>
                  </label>
                </li>
                <li className="py-2">
                  <label className="flex justify-start items-start">
                    <CheckBox />
                    <div className="select-none">
                      Build more stuff
                    </div>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-8 offset-lg-2">
        <h1>Hi user!</h1>
        <h3>All registered users:</h3>
        {users.loading && <em>Loading users...</em>}
        {users.error && <span className="text-danger">ERROR: {users.error}</span>}
        {users.items && <ul>
          {users.items.map(userData => <li key={userData.id}>
            {`${userData.firstName} ${userData.lastName}`}
            {
              // eslint-disable-next-line no-nested-ternary
              userData.deleting ? <em> - Deleting...</em>
                : userData.deleteError
                  ? <span className="text-danger"> - ERROR: {userData.deleteError}</span>
                  : <span> - <button onClick={() => handleDeleteUser(userData.id)} className="text-primary">Delete</button></span>
            }
          </li>)}
        </ul>
        }
        <p>
          <Link to="/login">Logout</Link>
        </p>
      </div>
    </div>
  );
};

export default MainDashboard;
