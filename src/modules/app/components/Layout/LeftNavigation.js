import React from 'react';
import { get } from 'lodash';
import { Link, useLocation } from 'react-router-dom';
import Motion from '../../../shared/components/Motion';
import routes from '../../../../config/routes';

const onlyPrivateLeftMenu = route => get(route, 'menu.visible.left', false) && !get(route, 'public', false);

const LeftNavigation = () => {
  const location = useLocation();

  const navLinks = routes
    .filter(onlyPrivateLeftMenu)
    .map((route, index) => (
      <Link
        to={route.path}
        key={index}
        className={`item${location.pathname === route.path ? ' active' : ''}`}
        title={route.menu.title}
      >
        <div className="links">
          <div className="icon">
            {route.menu.icon}
          </div>

          <span className="title">
            {route.menu.title}
          </span>
        </div>
      </Link>
    ));

  return (
    <nav className="left">
      <div className="profile">
        <div className="avatar">
          <Link to="/profile" title="Update Profile">
            <img className="picture" src={'./images/avatar.jpg'} alt="avatar" />
          </Link>
        </div>
      </div>
      <Motion type="4" className="menu">
        {navLinks}
      </Motion>
    </nav>
  );
};

export default LeftNavigation;
