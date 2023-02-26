import { STATUS } from "redux/constants";

export const authInitState = {
    status: STATUS.idle,
    data: null,
    token: null
}
