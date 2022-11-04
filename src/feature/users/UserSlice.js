import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { creatFeatch } from '../../utils/axios';
import { getLocalUser, removeLocalUser, saveLocalUser } from '../../utils/localStorage';

const initialState = {
  isLoading: false,
  isSidebarOpen:false,
  user: getLocalUser(),
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

export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async (user, thunkAPI) => {
    try {
      removeLocalUser();
      return `Logout Successfully`;
    } catch (error) {

    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{
    toggleSidebar:(state)=>{
      state.isSidebarOpen=!state.isSidebarOpen;
    }
  },
  extraReducers:{
    [loginUser.pending]:(state)=>{
      state.isLoading=true
    },
    [loginUser.fulfilled]:(state,{payload})=>{
      state.isLoading=false
      const { user } = payload;
      state.user = user;
      toast.success(`Hello!! ${user.name}`);
      saveLocalUser(user);
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
      state.isLoading=false;
      saveLocalUser(user);
      toast.success(`Welcome!! ${user.name}`);
      console.log(payload);
    },
    [newUser.rejected]:(state,{payload})=>{
      state.isLoading=false
      toast.error(payload);
    },
    [logoutUser.pending]:(state)=>{
      state.isLoading=true;
    },
    [logoutUser.fulfilled]:(state,{payload})=>{
      state.isLoading=false;
      state.user=null;
      toast.success(payload);
    }


  }

});

export const {toggleSidebar} =userSlice.actions;
export default userSlice.reducer;