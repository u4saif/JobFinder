import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{
    loginUser:(state,action)=>{
      state.user=action.payload.values;
    }
  }
});

export const {loginUser} =userSlice.actions;
export default userSlice.reducer;