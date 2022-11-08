import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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

export const creatJobThunk = createAsyncThunk('jobSlice/createJob',
    async (job, thunkAPI) => {
        try {
            const resp = await creatFeatch.post('/jobs', job,
                {
                    headers: {
                        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
                    }
                });
            thunkAPI.dispatch(clearAllValue());
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    });

const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        handleChange: (state, { payload: { name, value } }) => {
            state[name] = value;
        },
        clearAllValue: () => {
            return { ...initialState, jobLocation: getLocalUser()?.location || '' }
        }
    },
    extraReducers: {
        [creatJobThunk.pending]: (state) => {
            state.isLoading = true;
        },
        [creatJobThunk.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            toast.success("Record add");
        },
        [creatJobThunk.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload || "Faild to add Record");
        }
    }
});

export const { handleChange, clearAllValue } = jobSlice.actions;
export default jobSlice.reducer;