import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { creatFeatch } from '../../utils/axios';

const initialFiltersState = {
  search: '',
  searchStatus: 'interview',
  searchType: 'all',
  searchStatusOptions: ['all', 'interview', 'declined', 'pending'],
  searchTypeOptions: ['all', 'full-time', 'part-time', 'remote', 'internship'],
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
};

const initialState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  ...initialFiltersState,
};

export const getAllJobs = createAsyncThunk('AllJobSlice/getAlljobs',
  async (_, thunkAPI) => {
    try {
      const response = await creatFeatch.get('/jobs',
        {
          headers: {
            authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
          }
        });
        return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue("Internal Server Error");
    }
  });

const AllJobSlice = createSlice({
  name: 'allJob',
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearAllValue: () => {
      return {
        ...initialState
      }
    },
  },
  extraReducers:{
    [getAllJobs.pending]:(state)=>{
      state.isLoading = true;
    },
    [getAllJobs.fulfilled]:(state,{payload})=>{
      state.isLoading = false;
      state.jobs = payload.jobs;
    },
    [getAllJobs.rejected]:(state, { payload })=>{
      state.isLoading = false;
      toast.error(payload);
    }
  }
});


export const { handleChange, clearAllValue } = AllJobSlice.actions;
export default AllJobSlice.reducer;