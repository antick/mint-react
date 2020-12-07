import { alertConstants } from '../constants';
import { action } from '../../utilities';

const success = message => action(alertConstants.SUCCESS, message);

const error = message => action(alertConstants.ERROR, message);

const clear = () => action(alertConstants.CLEAR);

export default {
  success,
  error,
  clear
};
