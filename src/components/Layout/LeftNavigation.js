import React from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import routes from '../routes';

const LeftNavigation = () => {
  const leftNavigationLinks = routes.filter(route => get(route, 'menu.visible.left', false))
    .map((route, index) => (
      <Link to={route.path} key={index}>
        <div className="flex justify-center pt-8" title={route.menu.title}>
          {route.menu.icon}
        </div>
      </Link>
    ));

  return (
    // left-nav flex flex-col my-4 ml-4 pt-10 pb-10 w-32 min-h-screen rounded-3xl
    <nav className="left-nav flex pt-10 pb-20 flex-col w-36 min-h-screen">
      <div className="flex justify-center">
        <div className="relative overflow-hidden w-20 h-20 rounded-full border-4 border-gray-300">
          <img className="w-full h-auto absolute" src={'./images/avatar.jpg'} alt="avatar" />
        </div>
      </div>
      <div className="flex flex-col pt-10">
        {leftNavigationLinks}
      </div>
    </nav>
  );
};

export default LeftNavigation;
