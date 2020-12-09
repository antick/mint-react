import React from 'react';
import { useSelector } from 'react-redux';

/**
 * Show alert bar for showing alert messages
 *
 * @returns {JSX.Element}
 */
const useAlert = () => {
  const alert = useSelector(state => state.alert);

  return (
    <>
      {alert.message && <div className={alert.type}>{alert.message}</div>}
    </>
  );
};

export default useAlert;
