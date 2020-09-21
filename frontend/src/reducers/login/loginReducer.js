export const LOGIN = 'login/LOGIN';
export const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
export const LOGIN_FAILED = 'login/LOGIN_FAILED';

const login = (username, password) => ({
    type: LOGIN,
    username,
    password
});

const loginSuccess = data => ({
    type: LOGIN_SUCCESS,
    data
});

export const loginFailed = error => ({
    type: LOGIN_FAILED,
    error
});

const getError = ({ login }) => login.error;
const getData = ({ login }) => login.data;

export const selectors = {
    getError,
    getData
}

export const actions = {
    login,
    loginSuccess,
    loginFailed
}

const initialState = {
    isLoading: false,
    isLoggedIn: false,
    error: null,
    data: null
}

export default (state = initialState, action) => {
    switch (action.type) {

    case LOGIN: {
        const newState = {...state};
        newState.isLoading = true;
        return newState;
    }
    case LOGIN_SUCCESS: {
        const newState = {...state};
        newState.data = {
            username: action.data.username,
            password: action.data.password
        };
        newState.error = null;
        return newState;
    }
    case LOGIN_FAILED: {
        const newState = {...state};
        newState.isLoading = false;
        newState.error = action.error;
        newState.data = null;
        return newState;
    }

    default:
        return state;
    }
}
