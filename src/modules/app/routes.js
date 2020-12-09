import React from 'react';
import MainDashboard from './components/MainDashboard';
import SvgIcon from '../shared/components/SvgIcon';

export default [
  {
    component: MainDashboard,
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
