import {
  SET_USER,
  ADD_USER,
  AUTHENTICATE,
  CLEAR_ERROR,
  GET_USER,
  SET_ERROR,
  SET_LOADING,
  SET_LOADINGF,
  SET_OTP,
  SET_OTPSCS,
  SET_OTP2,
  SET_STATUS,
  LOGIN,
  PHONE_VER
} from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

//register
export const addUser = user => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = await axios.post("/api/users/token", user, config);

    // console.log(res.data);
    const data = {
      token: res.data.token,
      email: user.email
    };

    const res2 = await axios.post("/api/users/emailver", data, config);

    // console.log(res2.data);
    dispatch({
      type: SET_USER,
      payload: user
    });
    dispatch({
      type: ADD_USER,
      payload: res.data.token
    });
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: error.response.data.msg
    });
  }
};

export const authenticate = () => {
  return {
    type: AUTHENTICATE
  };
};
// export const check=(otp)=>async dispatch=>{

// dispatch({
//   type: SET_ERROR,

// })}
export const changePass = user => async dispatch => {
  try {
    const User = {
      email: user.email,
      password: user.password
    };
    const user2 = {
      email: user.email,
      password: user.newpass
    };

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = await axios.post("/api/users/auth", User, config);
    const token1 = res.data.token;
    const res2 = await axios.post("/api/users/changepass", user2, config);
    console.log(res2.data);

    dispatch({
      type: SET_STATUS,
      payload: "NewPassword"
    });
  } catch (err) {
    dispatch({
      type: SET_ERROR,
      payload: err.response.data.msg
    });
  }
};

export const changePass2 = data => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = await axios.post("/api/users/changepassLink", data, config);
    dispatch({
      type: SET_STATUS,
      payload: res.data.msg
    });
  } catch (err) {
    dispatch({
      type: SET_ERROR,
      payload: err.response.data.msg
    });
  }
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR
  };
};
export const editUser = user => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const info = {
      fname: user.fname,
      lname: user.lname,
      // email: user.email,
      number: user.number
    };

    const res = await axios.put("/api/users/edit", info, config);

    dispatch({
      type: SET_STATUS,
      payload: "Edited"
    });
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: error.data
    });
  }
};

export const forget = email => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const data = {
      email: email
    };
    const res = await axios.post("/api/users/forget", data, config);

    if (res.data.msg === "PasswordChange") {
      dispatch({
        type: SET_STATUS,
        payload: res.data.msg
      });
    } else {
      dispatch({
        type: SET_ERROR,
        payload: res.data.msg
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUser = () => async dispatch => {
  setOtps();
  try {
    const res = await axios.get("/api/users");
    dispatch({ type: GET_USER, payload: res.data });
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: error.data
    });
  }
};
export const loadUser = () => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const res = await axios.get("/auth", null, config);

  dispatch({
    type: GET_USER,
    payload: res.data
  });
};

//login

export const login = User => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = await axios.post("/api/users/auth", User, config);
    // console.log(res);
    const token1 = res.data.tokens.token;
    const message = res.data.tokens.message;

    const tk = "" + res.data.tokens.otp;
    const user = {
      token: token1,
      otp: tk,
      mes: message
    };

    dispatch({
      type: LOGIN,
      payload: user
    });
  } catch (err) {
    dispatch({
      type: SET_ERROR,
      payload: err.response.data.msg
    });
  }
};
export const phonev = phonen => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const data = {
    phone: phonen
  };
  const res2 = await axios.post("/api/users/phonever", data, config);
  console.log(res2.data);
  const token = "G" + res2.data.tk;
  dispatch({
    type: PHONE_VER,
    payload: token
  });
};
export const savePhone = user => async dispatch => {
  const { emailad, phonen } = user;
  console.log(user);
  const data = {
    phonenum: phonen,
    email: emailad
  };
  console.log(data);
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const res = await axios.put("/api/users", data, config);
  console.log(res.data);
  dispatch({
    type: SET_STATUS,
    payload: "Verified"
  });
};
export const setOTP = user => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const res = await axios.post("/api/users/", user, config);

  dispatch({
    type: SET_OTP
  });
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
export const setLoadingF = () => {
  return {
    type: SET_LOADINGF
  };
};

export const setOtps = () => {
  return {
    type: SET_OTPSCS
  };
};
export const setStatus = status => {
  return {
    type: SET_STATUS,
    payload: status
  };
};
