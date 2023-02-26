import { STATUS } from 'helpers/constants';

export const contactsInitState = {
  status: STATUS.idle,
  items: [],
  isLoading: true,
  error: null
};
