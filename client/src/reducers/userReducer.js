import {
  ADD_USER,
  AUTHENTICATE,
  CLEAR_ERROR,
  GET_USER,
  PHONE_VER,
  SET_ERROR,
  SET_LOADING,
  SET_LOADINGF,
  SET_OTP,
  SET_OTPSCS,
  SET_OTP2,
  SET_USER,
  SET_STATUS,
  LOGIN
} from "../actions/types";

const initialState = {
  user: null,
  otp: null,
  otp2: null,
  loading: null,
  error: null,
  otpS: null,
  phonec: null,
  status: null,
  token: null,
  isAuthenticated: null
  //   current: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        otp: action.payload
      };
    case AUTHENTICATE:
      return {
        ...state,
        isAuthenticated: true
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case LOGIN:
      const { token, otp, mes } = action.payload;
      return {
        ...state,
        otp2: otp,
        token: token,
        loading: false,
        isAuthenticated: mes
      };
    case PHONE_VER:
      return {
        ...state,
        phonec: action.payload
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_LOADINGF:
      return {
        ...state,
        loading: false
      };
    case SET_OTP:
      return {
        ...state,
        otp: null
      };
    case SET_OTPSCS:
      return {
        ...state,
        otpS: "success"
      };
    case SET_OTP2:
      return {
        ...state,
        otp2: action.payload
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.payload
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload
      };

    default:
      return state;
  }
};
