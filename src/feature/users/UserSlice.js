import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { creatFeatch } from '../../utils/axios';

const initialState = {
  isLoading: false,
  user: null,
};

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    try{
      const resp= await creatFeatch.post('/auth/login',user);
      return resp.data;
    }
    catch (error){
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const newUser = createAsyncThunk(
  'user/newUser',
  async(user,thunkAPI)=>{
    try{
      const resp=await creatFeatch.post('/auth/register',user);
      return resp.data;
    } catch(error){
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers:{
    [loginUser.pending]:(state)=>{
      state.isLoading=true
    },
    [loginUser.fulfilled]:(state,{payload})=>{
      state.isLoading=false
      const { user } = payload;
      state.user = user;
      toast.success(`Hello!! ${user.name}`);
      console.log(payload);

    },
    [loginUser.rejected]:(state,{payload})=>{
      state.isLoading=false
      toast.error(payload);
    },
    [newUser.pending]:(state)=>{
      state.isLoading=true
    },
    [newUser.fulfilled]:(state,{payload})=>{
      const { user } = payload;
      state.user = user;
      state.isLoading=false
      toast.success(`Welcome!! ${user.name}`);
      console.log(payload);
    },
    [newUser.rejected]:(state,{payload})=>{
      state.isLoading=false
      toast.error(payload);
    },

  }

});


export default userSlice.reducer;