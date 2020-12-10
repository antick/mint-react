import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import SvgIcon from '../../../shared/components/SvgIcon';
import userActions from '../../../user/actions/userAction';

const TopNavigation = ({ history }) => {
  const dispatch = useDispatch();

  const logout = () => dispatch(userActions.logout(history));

  return (
    <nav className="top-nav">
      <div className="flex w-full">
        <nav className="flex-col pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
          <div>
            <button className="menu-item">
              Entertainment
            </button>
          </div>
          <div>
            <div className="group inline-block">
              <button className="flex menu-item">
                Crazy Stuff
                <SvgIcon
                  name="arrow"
                  classes="w-4 h-4 mt-1 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                />
              </button>
              <ul className="multi-menu scale-0 group-hover:scale-100 transform transition duration-150 ease-in-out">
                <li className="multi-menu-item row">
                  <div className="bg-teal-500 text-white rounded-lg p-3">
                    <SvgIcon name="cog" classes="w-6 h-6" />
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Appearance</p>
                    <p className="text-sm">Easy customization</p>
                  </div>
                </li>
                <li className="multi-menu-item row">
                  <div className="bg-teal-500 text-white rounded-lg p-3">
                    <SvgIcon name="cog" classes="w-6 h-6" />
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Comments</p>
                    <p className="text-sm">Check your latest comments</p>
                  </div>
                </li>
                <li className="multi-menu-item row">
                  <div className="bg-teal-500 text-white rounded-lg p-3">
                    <SvgIcon name="cog" classes="w-6 h-6" />
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Analytics</p>
                    <p className="text-sm">Take a look at your statistics</p>
                  </div>
                </li>
                <li className="multi-menu-item row">
                  <div className="bg-teal-500 text-white rounded-lg p-3">
                    <SvgIcon name="cog" classes="w-6 h-6" />
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Analytics</p>
                    <p className="text-sm">Take a look at your statistics</p>
                  </div>
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button className="w-full text-left flex items-center outline-none focus:outline-none">
                    <span className="pr-1 flex-1">Too many stuff</span>
                    <span className="mr-auto">
                      <SvgIcon name="arrow" classes="w-4 h-4 transition duration-150 ease-in-out" />
                    </span>
                  </button>
                  <ul className="sub-menu">
                    <li className="px-3 py-1 hover:bg-gray-100">
                      <button className="sub-menu-button">Funny Stuff</button>
                    </li>
                    <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                      <button className="w-full text-left flex items-center outline-none focus:outline-none">
                        <span className="pr-1 flex-1">
                          <span className="sub-menu-button">Garden</span>
                        </span>
                        <span className="mr-auto">
                          <SvgIcon name="arrow" classes="w-4 h-4 transition duration-150 ease-in-out" />
                        </span>
                      </button>
                      <ul className="sub-menu">
                        <li className="px-3 py-1 hover:bg-gray-100">
                          <button className="sub-menu-button">Static Data</button>
                        </li>
                        <li className="px-3 py-1 hover:bg-gray-100">
                          <button className="sub-menu-button">Expenses</button>
                        </li>
                      </ul>
                    </li>
                    <li className="px-3 py-1 hover:bg-gray-100">
                      <button className="sub-menu-button">Creativity</button>
                    </li>
                    <li className="px-3 py-1 hover:bg-gray-100">
                      <button className="sub-menu-button">Submenu Link #4</button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <button className="menu-item">
              Productivity
            </button>
          </div>
          <div>
            <button className="menu-item">
              Daily Journal
            </button>
          </div>
          <div>
            <div className="group inline-block">
              <button className="flex menu-item">
                Photos
                <SvgIcon
                  name="arrow"
                  classes="w-4 h-4 mt-1 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                />
              </button>
              <ul className="multi-menu scale-0 group-hover:scale-100 transform transition duration-150 ease-in-out">
                <li className="multi-menu-item row">
                  <div className="bg-teal-500 text-white rounded-lg p-3">
                    <SvgIcon name="cog" classes="w-6 h-6" />
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Appearance</p>
                    <p className="text-sm">Easy customization</p>
                  </div>
                </li>
                <li className="multi-menu-item row">
                  <div className="bg-teal-500 text-white rounded-lg p-3">
                    <SvgIcon name="cog" classes="w-6 h-6" />
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Comments</p>
                    <p className="text-sm">Check your latest comments</p>
                  </div>
                </li>
                <li className="multi-menu-item row">
                  <div className="bg-teal-500 text-white rounded-lg p-3">
                    <SvgIcon name="cog" classes="w-6 h-6" />
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Analytics</p>
                    <p className="text-sm">Take a look at your statistics</p>
                  </div>
                </li>

                <li className="multi-menu-item row">
                  <div className="bg-teal-500 text-white rounded-lg p-3">
                    <SvgIcon name="cog" classes="w-6 h-6" />
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Analytics</p>
                    <p className="text-sm">Take a look at your statistics</p>
                  </div>
                </li>

                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button className="w-full text-left flex items-center outline-none focus:outline-none">
                    <span className="pr-1 flex-1">Too many stuff</span>
                    <span className="mr-auto">
                      <SvgIcon name="arrow" classes="w-4 h-4 transition duration-150 ease-in-out" />
                    </span>
                  </button>
                  <ul className="sub-menu">
                    <li className="px-3 py-1 hover:bg-gray-100">
                      <button className="sub-menu-button">Submenu Link #5</button>
                    </li>
                    <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                      <button className="w-full text-left flex items-center outline-none focus:outline-none">
                        <span className="pr-1 flex-1">
                          <span className="sub-menu-button">Submenu Link #6</span>
                        </span>
                        <span className="mr-auto">
                          <SvgIcon name="arrow" classes="w-4 h-4 transition duration-150 ease-in-out" />
                        </span>
                      </button>
                      <ul className="sub-menu">
                        <li className="px-3 py-1 hover:bg-gray-100">
                          <button className="sub-menu-button">Submenu Link #1</button>
                        </li>
                        <li className="px-3 py-1 hover:bg-gray-100">
                          <button className="sub-menu-button">Submenu Link #2</button>
                        </li>
                      </ul>
                    </li>
                    <li className="px-3 py-1 hover:bg-gray-100">
                      <button className="sub-menu-button">Submenu Link #3</button>
                    </li>
                    <li className="px-3 py-1 hover:bg-gray-100">
                      <button className="sub-menu-button">Submenu Link #4</button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="flex w-full">
        <div className="flex w-full justify-end items-center pr-4">
          <div className="flex relative rounded-full items-center">
            <div className="group inline-block">
              <button
                className="flex bg-gray-50 hover:bg-gray-100 rounded-full p-2 focus:outline-none"
                onClick={logout}
                title="Logout">
                <SvgIcon
                  name="power-off"
                  viewBox="0 0 512.101 512.101"
                  classes="w-8 h-8 fill-current text-red-600 transition duration-500 ease-in-out transform hover:rotate-360"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

TopNavigation.propTypes = {
  history: PropTypes.object
};

export default TopNavigation;
