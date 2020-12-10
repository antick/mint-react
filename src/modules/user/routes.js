import React from 'react';
import SvgIcon from '../shared/components/SvgIcon';
import UserList from './components/UserList';
import PostList from './components/PostList';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Task from './components/Task';
import Campaign from './components/Campaign';

export default [
  {
    component: UserList,
    path: '/users',
    menu: {
      title: 'Users',
      icon: <SvgIcon name="users" classes="nav-link" />,
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
    component: Task,
    path: '/tasks',
    menu: {
      title: 'Tasks',
      icon: <SvgIcon name="air" classes="nav-link" />,
      visible: {
        top: false,
        right: false,
        bottom: false,
        left: true
      }
    }
  },
  {
    component: Campaign,
    path: '/campaigns',
    menu: {
      title: 'Campaigns',
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
    component: Settings,
    path: '/settings',
    menu: {
      title: 'Settings',
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
    component: Profile,
    path: '/profile'
  }
];
