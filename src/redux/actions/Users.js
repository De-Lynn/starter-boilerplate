import {
  SELECTED_USER_CHANGE
} from '../constants/Users';

export function selectedUserChange(user) {
  return {
    type: SELECTED_USER_CHANGE,
    user
  };
}