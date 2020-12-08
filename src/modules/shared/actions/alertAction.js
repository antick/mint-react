import {
  SUCCESS,
  ERROR,
  CLEAR
} from './types/alertType';
import { action } from '../utilities/actionUtility';

const success = message => action(SUCCESS, message);

const error = message => action(ERROR, message);

const clear = () => action(CLEAR);

export default {
  success,
  error,
  clear
};
