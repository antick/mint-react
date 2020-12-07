import React from 'react';
import UserList from './components/User/UserList';
import MainDashboard from './components/Dashboard/MainDashboard';
import NotFound from './components/Public/NotFound';
import SvgIcon from './components/shared/SvgIcon';
import PostList from './components/User/PostList';

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
