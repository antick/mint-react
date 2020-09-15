import { alertConstants } from '../constants';

const success = message => ({ type: alertConstants.SUCCESS, message });

const error = message => ({ type: alertConstants.ERROR, message });

const clear = () => ({ type: alertConstants.CLEAR });

export default {
  success,
  error,
  clear
};
