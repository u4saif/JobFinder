import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { creatFeatch } from '../../utils/axios';
import { } from '../../utils/localStorage';

const initialState = {
    isLoading: false,
    position: '',
    company: '',
    jobLocation: '',
    jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
    jobType: 'full-time',
    statusOptions: ['interview', 'declined', 'pending'],
    status: 'pending',
    isEditing: false,
    editJobId: '',
}

const jobSlice=createSlice({
    name:"job",
    initialState,
    reducers:{

    }
});

export default jobSlice.reducer;