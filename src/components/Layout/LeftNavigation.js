import React from 'react';
import { Link } from 'react-router-dom';
import SvgIcon from '../shared/SvgIcon';

const LeftNavigation = () => {
  const leftNavigationData = [
    { icon: 'book', title: 'Books', link: '/books' },
    { icon: 'cog', title: 'Cog', link: '/books' },
    { icon: 'archive', title: 'Archive', link: '/books' },
    { icon: 'bookmarks', title: 'Bookmarks', link: '/books' },
    { icon: 'briefcase', title: 'Briefcase', link: '/books' },
    { icon: 'calculator', title: 'Calculator', link: '/books' },
    { icon: 'calendar', title: 'Calendar', link: '/books' },
    { icon: 'mail', title: 'Mail', link: '/books' },
    { icon: 'wallet', title: 'Wallet', link: '/books' }
  ];

  const leftNavigationLinks = leftNavigationData.map((menu, index) => (
    <Link to={menu.link} key={index}>
      <div className="flex justify-center pt-8" title={menu.title}>
        <SvgIcon name={menu.icon} classes="nav-link" />
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
        { leftNavigationLinks }
      </div>
    </nav>
  );
};

export default LeftNavigation;
