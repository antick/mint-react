import React from 'react';
import SvgIcon from '../shared/components/SvgIcon';
import UserList from './components/UserList';
import PostList from './components/PostList';
import NotFound from '../auth/components/NotFound';

export default [
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
  }
];
