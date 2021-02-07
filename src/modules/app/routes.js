import React from 'react';
import Dashboard from './components/Dashboard';
import SvgIcon from '../shared/components/SvgIcon';

export default [
  {
    component: Dashboard,
    path: '/',
    exact: true,
    menu: {
      title: 'Dashboard',
      icon: <SvgIcon name="dashboard" classes="nav-link" />,
      visible: {
        top: false,
        right: false,
        bottom: false,
        left: true
      }
    }
  }
];
