import React from 'react';
import {
  XAxis, YAxis,
  Area, AreaChart,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';
import faker from '../../shared/utilities/fakerUtility';
import Motion from '../../shared/components/Motion';
import CheckBox from '../../shared/components/Form/CheckBox';
import SvgIcon from '../../shared/components/SvgIcon';

const MainDashboard = () => {
  const data = faker.chartData();
  const today = new Date().toDateString();

  return (
    <div className="p-5 bg-white bg-opacity-60 rounded-br-xl min-h-screen">
      <div className="flex">
        <Motion type="1" className="welcome-block">
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
            <div className="weather-widget">
              <div className="flex font-semibold">
                Weather today in Olympus, Mars
              </div>
              <div className="justify-start items-center">
                <div className="flex flex-row mt-4">
                  <div className="flex flex-col items-center">
                    <SvgIcon name="air" classes="w-16 h-16 text-white" />
                    <span>Windy</span>
                  </div>
                  <div className="text-3xl 2xl:text-5xl ml-6 mt-4 font-semibold">
                    28 <span className="text-2xl 2xl:text-4xl">°C</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Motion>

        <Motion type="2" className="wod-widget">
          <div className="p-8">
            <div className="font-semibold text-left text-gray-100">
              Word of the Day
            </div>
            <div className="ml-6">
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
        </Motion>
      </div>

      <div className="flex my-4 items-center text-gray-800">
        <div className="w-full">
          <Motion type="3" className="grid grid-cols-12 gap-4">
            <div className="col-span-12 sm:col-span-6 md:col-span-3">
              <div className="section-bg flex flex-row shadow-sm rounded-lg p-4">
                <div
                  className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-full bg-blue-200 text-blue-500">
                  {/* eslint-disable-next-line max-len */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {/* eslint-disable-next-line max-len */}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <div className="flex flex-col flex-grow ml-4">
                  <div className="text-sm text-gray-500">Users</div>
                  <div className="font-bold text-lg">786</div>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-3">
              <div className="section-bg flex flex-row shadow-sm rounded-lg p-4">
                <div className="flex items-center justify-center flex-shrink-0 h-12 w-12
                  rounded-full bg-fuchsia-200 text-fuchsia-500">
                  {/* eslint-disable-next-line max-len */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {/* eslint-disable-next-line max-len */}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                  </svg>
                </div>
                <div className="flex flex-col flex-grow ml-4">
                  <div className="text-sm text-gray-500">Tasks</div>
                  <div className="font-bold text-lg">48</div>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-3">
              <div className="section-bg flex flex-row shadow-sm rounded-lg p-4">
                <div
                  className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-full bg-orange-200 text-orange-500">
                  {/* eslint-disable-next-line max-len */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {/* eslint-disable-next-line max-len */}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
                <div className="flex flex-col flex-grow ml-4">
                  <div className="text-sm text-gray-500">Posts</div>
                  <div className="font-bold text-lg">86</div>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-3">
              <div className="section-bg flex flex-row shadow-sm rounded-lg p-4">
                <div className="flex items-center justify-center flex-shrink-0 h-12 w-12
                  rounded-full bg-emerald-200 text-emerald-500">
                  {/* eslint-disable-next-line max-len */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {/* eslint-disable-next-line max-len */}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div className="flex flex-col flex-grow ml-4">
                  <div className="text-sm text-gray-500">Revenue</div>
                  <div className="font-bold text-lg">$ 32k</div>
                </div>
              </div>
            </div>
          </Motion>
        </div>
      </div>

      <div className="flex">
        <div className="w-2/3 font-sans text-gray-700">
          <Motion type="2" className="week-widget">
            <div className="week-widget-section">
              <div className="week-widget-header">
                <h3 className="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
                  This week
                </h3>
                <span className="text-sm items-center flex text-gray-500 font-normal">18 May - 24 May</span>
              </div>
              <div className="week-widget-dates">
                <div className="item">
                  Mon <p className="text-center">18</p>
                </div>
                <div className="item">
                  Tue <p className="text-gray-600 text-center">19</p>
                </div>
                <div className="item current">
                  Wed <p className="text-center">20</p>
                </div>
                <div className="item">
                  Thu <p className="text-center">21</p>
                </div>
                <div className="item">
                  Fri <p className="text-center">22</p>
                </div>
                <div className="item">
                  Sat <p className="text-center">23</p>
                </div>
                <div className="item">
                  Sun <p className="text-center">24</p>
                </div>
              </div>
            </div>
            <div className="today-event-widget">
              <div className="font-semibold text-sm text-gray-700">
                Today&rsquo;s Events
              </div>
              <div className="flex flex-row pt-3">
                <ul className="leading-7 text-xs">
                  <li>Meeting with Brad.</li>
                  <li>Birthday party in evening.</li>
                  <li>Phone interview.</li>
                </ul>
              </div>
              <div className="text-xs text-teal-600 hover:text-teal-500 pt-2">
                <a href={'/users'}>More...</a>
              </div>
            </div>
          </Motion>

          <Motion type="3" className="section-bg flex border mt-6 border-gray-200 rounded-lg">
            <div className="flex flex-col p-8 w-full">
              <div className="font-semibold">Monthly Growth</div>
              <div className="pt-3 text-sm w-full h-64">
                <ResponsiveContainer height={'100%'} width={'100%'}>
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
          </Motion>
        </div>

        <Motion type="3" className="section-bg w-1/3 font-sans border border-gray-200 rounded-lg text-gray-700 ml-6">
          <div className="p-8">
            <div className="font-semibold text-left">Due Today</div>
            <div className="text-sm ml-3 mt-5 text-gray-600">
              <ul>
                <li className="py-2">
                  <CheckBox label="Make the design responsive"/>
                </li>
                <li className="py-2">
                  <CheckBox label="Do your dishes before you are thrown out of your house"/>
                </li>
                <li className="py-2">
                  <CheckBox label="Learn Next.js and build something"/>
                </li>
                <li className="py-2">
                  <CheckBox label="Call your best friend and tell him that he is an idiot"/>
                </li>
                <li className="py-2">
                  <CheckBox label="Take a deep breath"/>
                </li>
              </ul>
            </div>
            <div className="font-semibold text-left mt-5 text-red-500">
              Overdue
            </div>
            <div className="text-sm ml-3 mt-5 text-gray-600">
              <ul>
                <li className="py-2">
                  <CheckBox label="Throw out the smelly trash"/>
                </li>
                <li className="py-2">
                  <CheckBox label="Invent a time machine"/>
                </li>
                <li className="py-2">
                  <CheckBox label="Buy a new headphone"/>
                </li>
                <li className="py-2">
                  <CheckBox label="Drink immortality elixir"/>
                </li>
              </ul>
            </div>
          </div>
        </Motion>
      </div>
    </div>
  );
};

export default MainDashboard;
