import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { creatFeatch } from '../../utils/axios';

const initialFiltersState = {
  search: '',
  searchStatus: 'all',
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
    const {page,search,searchStatus,searchType,sort}=thunkAPI.getState().allJob;
    let url=`/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
    if(search){
      url=url + `&search=${search}`;
    }
    try {
      const response = await creatFeatch.get(url,
        {
          headers: {
            authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
          }
        });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  });

const AllJobSlice = createSlice({
  name: 'allJob',
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    changePage: (state,{payload})=>{
      state.page=payload;
    },
    clearAllValue: () => {
      return {
        ...initialState
      }
    },
  },
  extraReducers: {
    [getAllJobs.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllJobs.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.jobs = payload.jobs;
      state.numOfPages = payload.numOfPages;
      state.totalJobs = payload.totalJobs;
    },
    [getAllJobs.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload || "Internal Server Error");
    }
  }
});


export const { handleChange, clearAllValue, showLoading, hideLoading,changePage } = AllJobSlice.actions;
export default AllJobSlice.reducer;