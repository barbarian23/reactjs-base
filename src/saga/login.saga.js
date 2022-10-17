import { takeLatest, take, put, call } from 'redux-saga/effects';
import { loginAction } from '../../action';
import { requestGet } from "../service";

const callLogin = function (data) {
    //return requestGet;
}

const login = function* (data) {
    yield put({ type: LOGGINGIN, value: true });

    let responce = yield call(callLogin, data);

    if (responce) {
        console.log("responce", responce);
        if (responce.data == 1) {
            yield put({
                type: OPEN_OTP_SCREEN
            })
        } else if (responce.data == -1) {
            yield put({
                type: LOGIN_ERROR,
                value: "Đăng nhập lỗi, hãy thử lại"
            })
        } else if (responce.data == 3) {
            yield put({
                type: GO_TO_HOME
            })
        }
        yield put({ type: LOGGINGIN, value: false });
    }
}

//watcher
export const watchLogin = function* () {
    yield takeLatest(loginAction.GO_TO_HOME, login);
}