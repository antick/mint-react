import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({ label }) => (
  <div className="flex items-start text-sm">
    <div className="flex items-center">
      <input type="checkbox" className="mt-1 form-checkbox border-gray-400 h-4 w-4 text-indigo-600"/>
    </div>
    <label className="ml-3 text-gray-700">{label}</label>
  </div>
);

CheckBox.propTypes = {
  label: PropTypes.string
};

export default CheckBox;
