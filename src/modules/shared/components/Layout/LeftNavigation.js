import React from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import Motion from '../Motion';
import routes from '../../../../routes';

const LeftNavigation = () => {
  const leftNavigationLinks = routes.filter(route => get(route, 'menu.visible.left', false))
    .map((route, index) => (
      <Link to={route.path} key={index}>
        <div className="left-nav-icons" title={route.menu.title}>
          {route.menu.icon}
        </div>
      </Link>
    ));

  return (
    <nav className="left-nav">
      <div className="flex justify-center">
        <div className="relative overflow-hidden w-20 h-20 rounded-full border-4 border-gray-300">
          <img className="w-full h-auto absolute" src={'./images/avatar.jpg'} alt="avatar" />
        </div>
      </div>
      <Motion type="4" className="flex flex-col pt-10 justify-center items-center">
        {leftNavigationLinks}
      </Motion>
    </nav>
  );
};

export default LeftNavigation;
