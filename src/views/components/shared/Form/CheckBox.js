import React from 'react';

const CheckBox = () => (
  <div className="custom-check focus-within:border-blue-500">
    <input type="checkbox" className="opacity-0 absolute" />
    <svg className="fill-current hidden w-4 h-4 text-green-500 pointer-events-none" viewBox="0 0 20 20">
      <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
    </svg>
  </div>
);

export default CheckBox;
