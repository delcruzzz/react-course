import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  posts: [],
  tags: [],
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
    setTags: (state, action) => {
      state.tags = action.payload
    },
  }
})

export const {
  setLoading,
  setPosts,
  setTags,
} = socialSlice.actions
