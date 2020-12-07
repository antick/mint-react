import {
  SUCCESS,
  ERROR,
  CLEAR
} from '../constants/alertConstant';
import { action } from '../../utilities';

const success = message => action(SUCCESS, message);

const error = message => action(ERROR, message);

const clear = () => action(CLEAR);

export default {
  success,
  error,
  clear
};
