import { createSlice } from '@reduxjs/toolkit'

export const cats = createSlice({
  name: 'cats',
  initialState: {
    images: [],
  },
  reducers: {
    setImages: (state, action) => {
      state.images = action.payload.images;
    },
  }
})

export const selectors = {
  images: state => state.cats.images,
};
