import firebase from "../firebase";
import "firebase/database";

import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialAuthState = { currentUser: null, isLogin: null };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
  logout(state) {
    state.isLogin = false;
  },
});

const initialPostsState = { posts: null, error: null };

const postsSlice = createSlice({
  name: "posts",
  initialState: initialPostsState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { auth: authSlice.reducer, posts: postsSlice.reducer },
});

export const authActions = authSlice.actions;
export const postsActions = postsSlice.actions;
export default store;
