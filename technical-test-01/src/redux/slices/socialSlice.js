import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  isLoading: false,
}

export const socialSlice = createSlice({
  name: 'social',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setPosts: (state, action) => {
      state.posts = action.payload
    },
  }
})

export const {
  setLoading,
  setPosts,
} = socialSlice.actions
