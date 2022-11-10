import { createSlice } from "@reduxjs/toolkit";

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
  }
});
export const { handleChange ,clearAllValue} = AllJobSlice.actions;
export default AllJobSlice.reducer;