import { createSlice } from '@reduxjs/toolkit'

export const likes = createSlice({
  name: 'likes',
  initialState: {
    catLikes: {},
  },
  reducers: {
    like: (state, action) => {
      const catId = action.payload;
      state.catLikes[catId] = true;
    },
    dislike: (state, action) => {
      const catId = action.payload;
      state.catLikes[catId] = false;
    },
    toggle: (state, action) => {
      console.log(action);
      const catId = action.payload;
      const current = !!state.catLikes[catId];
      state.catLikes[catId] = !current;
    }
  }
})

export const selectors = {
  likeIds: state => Object.keys(state.likes.catLikes).reduce((acc, catId) => {
    if (!!state.likes.catLikes[catId]) return acc.concat(catId);

    return acc;
  }, []),
};
