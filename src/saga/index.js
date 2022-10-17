import { select, take, all } from 'redux-saga/effects';
import { watchLogin } from "./login/login.saga";

//quan sát toàn bộ các action
const watchAndLog = function* () {
    while (true) {
        const action = yield take('*');
        const state = yield select();
    }
}

const rootSaga = function* () {
    yield all([
        watchAndLog(),
        watchLogin(),
    ])
}

export default rootSaga;