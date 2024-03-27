import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userInfo: null,
  isAuthenticated: false,
  name: 'Hello Auth Slice',
  token: null,
  weatherDetails: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const {token, data} = action.payload;
      state.token = token;
      state.userInfo = action.payload;
      state.isAuthenticated = !!token;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
      state.token = action.payload;
    },
    logOutUser: (state, action) => {
      console.log('logout called');
      state.userInfo = null;
      state.isAuthenticated = false;
      state.token = null;
    },
    setWeatherDetails: (state, action) => {
      const {data} = action.payload;
      state.weatherDetails = data;
    },
  },
});

export const {setCredentials, setAuthenticated, logOutUser, setWeatherDetails} =
  authSlice.actions;

export default authSlice.reducer;
