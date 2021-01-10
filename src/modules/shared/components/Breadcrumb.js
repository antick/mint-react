import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ title }) => (
  <div className="bg-gray-100 p-3 px-4 sm:px-6 lg:px-8">
    <div className="flex items-center space-x-2 text-gray-400 text-sm">
      <Link to="/" className="hover:underline hover:text-gray-600">Home</Link>
      <span>
        <svg className="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
        </svg>
      </span>
      <Link to="/users" className="hover:underline hover:text-gray-600">Users</Link>
      <span>
        <svg className="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
        </svg>
      </span>
      <span>{title}</span>
    </div>
  </div>
);

Breadcrumb.propTypes = {
  title: PropTypes.string
};

export default Breadcrumb;
