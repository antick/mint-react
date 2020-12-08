import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import userAction from '../../user/actions/userAction';
import auth from '../utilities/authUtility';

/**
 * Refresh access token silently
 *
 * @returns {boolean}
 */
const useSilentToken = () => {
  const dispatch = useDispatch();

  const tokenExpiresIn = auth.getTokenExpiry();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Refresh the token before 1 minute (60000 ms) of it's expiry
    const timeout = (tokenExpiresIn * 60000) - 60000;

    const loggedInStatus = setTimeout(() => {
      dispatch(userAction.refreshTokens());
      setLoggedIn(true);
    }, timeout);

    return () => {
      setLoggedIn(false);
      clearTimeout(loggedInStatus);
    };
  }, [dispatch, loggedIn, tokenExpiresIn]);

  return loggedIn;
};

export default useSilentToken;
