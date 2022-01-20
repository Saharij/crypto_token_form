import { createStore } from 'redux';

const ADD_NEW_TOKEN = 'CREATE_NEW_TOKEN';

export const tokenFromStore = (state) => state.token;

export const addCryptoToken = (token) => {
  return {
    type: ADD_NEW_TOKEN,
    data: token,
  }
}

const initialState = {
  token: {},
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TOKEN:
      return {
        ...state,
        token: {...action.data},
      }

    default:
      return state;
  }
}

const store = createStore(
  rootReducer,
);

export default store;
