import React from 'react';
import UserList from './modules/user/components/UserList';
import MainDashboard from './modules/app/components/MainDashboard';
import NotFound from './modules/auth/components/NotFound';
import SvgIcon from './modules/shared/components/SvgIcon';
import PostList from './modules/user/components/PostList';

/**
 * All protected routes should be placed here
 */
const routes = [
  {
    component: MainDashboard,
    path: '/',
    exact: true,
    menu: {
      title: 'Dashboard',
      icon: <SvgIcon name="book" classes="nav-link" />,
      visible: {
        top: false,
        right: false,
        bottom: false,
        left: true
      }
    }
  },
  {
    component: UserList,
    path: '/users',
    menu: {
      title: 'Users',
      icon: <SvgIcon name="cog" classes="nav-link" />,
      visible: {
        top: false,
        right: false,
        bottom: false,
        left: true
      }
    }
  },
  {
    component: PostList,
    path: '/posts',
    menu: {
      title: 'Posts',
      icon: <SvgIcon name="archive" classes="nav-link" />,
      visible: {
        top: false,
        right: false,
        bottom: false,
        left: true
      }
    }
  },
  {
    component: UserList,
    path: '/posts',
    menu: {
      title: 'Posts',
      icon: <SvgIcon name="bookmarks" classes="nav-link" />,
      visible: {
        top: false,
        right: false,
        bottom: false,
        left: true
      }
    }
  },
  {
    component: NotFound,
    path: '/oops',
    menu: {
      title: 'Users',
      icon: <SvgIcon name="calculator" classes="nav-link" />,
      visible: {
        top: false,
        right: false,
        bottom: false,
        left: true
      }
    }
  },
  {
    component: UserList,
    path: '/posts',
    menu: {
      title: 'Users',
      icon: <SvgIcon name="calendar" classes="nav-link" />,
      visible: {
        top: false,
        right: false,
        bottom: false,
        left: true
      }
    }
  },
  {
    component: NotFound,
    path: '/test',
    menu: {
      title: 'Users',
      icon: <SvgIcon name="mail" classes="nav-link" />,
      visible: {
        top: false,
        right: false,
        bottom: false,
        left: true
      }
    }
  },
  {
    component: UserList,
    path: '/users',
    menu: {
      title: 'Users',
      icon: <SvgIcon name="wallet" classes="nav-link" />,
      visible: {
        top: false,
        right: false,
        bottom: false,
        left: true
      }
    }
  },
  {
    component: NotFound
  }
];

export default routes;
