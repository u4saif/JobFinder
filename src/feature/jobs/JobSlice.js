import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { creatFeatch } from '../../utils/axios';
import { getLocalUser } from '../../utils/localStorage';

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
        handleChange:(state, { payload: { name, value } })=>{
            state[name]=value;
        },
        clearAllValue:()=>{
            return {...initialState,jobLocation: getLocalUser()?.location || ''}
        }
    }
});

export const { handleChange, clearAllValue } = jobSlice.actions;
export default jobSlice.reducer;