import React from 'react';
import {
  XAxis, YAxis,
  Area, AreaChart,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';
import faker from '../../../utilities/fakerUtility';
import Motion from '../shared/Motion';
import CheckBox from '../shared/Form/CheckBox';
import SvgIcon from '../shared/SvgIcon';

const MainDashboard = () => {
  const data = faker.chartData();
  const today = new Date().toDateString();

  return (
    <div className="mb-10">
      <div className="flex">
        <Motion type="1" className="w-2/3 font-sans bg-gray-100 border border-gray-200 rounded-lg text-gray-700 h-64">
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
                <div className="pt-3 pl-8 text-4xl font-semibold">
                  40 / 28 °C
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
        </Motion>
      </div>

      <div className="flex mt-6">
        <div className="w-2/3 font-sans text-gray-700">
          <Motion type="3" className="flex border bg-white border-gray-200 rounded-lg h-48">
            <div className="flex flex-col p-8 pt-6 w-3/4">
              <div className="text-xl font-semibold">
                <h3 className="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
                  This week
                </h3>
                <span className="text-sm items-center flex text-gray-500 font-normal">18 May - 24 May</span>
              </div>
              <div className="flex flex-row pt-6 text-md">
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
                <div className="text-sm border-r border-gray-300 py-4 px-8 text-teal-500 font-semibold">
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

          <Motion type="3" className="flex border mt-6 bg-white border-gray-200 rounded-lg">
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
          </Motion>
        </div>

        <Motion type="3" className="w-1/3 font-sans bg-white border border-gray-200 rounded-lg text-gray-700 ml-6 -mr-6">
          <div className="p-8">
            <div className="font-semibold text-left">Due Today</div>
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
                      Take a deep breath.
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
                      Invent a time machine.
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
                      Prepare for the presentation.
                    </div>
                  </label>
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
