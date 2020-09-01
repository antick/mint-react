import React from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import SvgIcon from '../shared/SvgIcon';
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
    <nav className="left-nav flex pt-10 flex-col w-40 min-h-screen">
      <Link to={'/'}>
        <div className="flex justify-center">
          <SvgIcon name="home" classes="w-16 h-16 text-white" />
        </div>
      </Link>
      <div className="flex flex-col pt-16">
        {leftNavigationLinks}
      </div>
    </nav>
  );
};

export default LeftNavigation;
