import React from 'react';
import { get } from 'lodash';
import { Link, useLocation } from 'react-router-dom';
import Motion from '../../../shared/components/Motion';
import routes from '../../../../config/routes';

const LeftNavigation = () => {
  const location = useLocation();

  const leftNavigationLinks = routes
    .filter(route => get(route, 'menu.visible.left', false) && !get(route, 'public', false))
    .map((route, index) => (
      <Link
        to={route.path}
        key={index}
        className={`left-nav-item ${location.pathname === route.path ? 'left-nav-active' : ''}`}
        title={route.menu.title}
      >
        <div className="flex flex-col">
          <div className="flex justify-center">
            {route.menu.icon}
          </div>

          <span className="text-gray-100 font-medium mt-2 font-noto text-xs tracking-wide">
            {route.menu.title}
          </span>
        </div>
      </Link>
    ));

  return (
    <nav className="left-nav">
      <div className="flex justify-center">
        <div className="nav-avatar">
          <Link to="/profile">
            <img className="w-full h-auto absolute" src={'./images/avatar.jpg'} alt="avatar" />
          </Link>
        </div>
      </div>
      <Motion type="4" className="left-nav-menu">
        {leftNavigationLinks}
      </Motion>
    </nav>
  );
};

export default LeftNavigation;
