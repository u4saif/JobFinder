import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { creatFeatch } from '../../utils/axios';
import { getLocalUser } from '../../utils/localStorage';
import { showLoading, hideLoading, getAllJobs } from '../jobs/AlljobSlice';
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

export const editJob = createAsyncThunk(
    'job/editJob',
    async ({ jobId, job }, thunkAPI) => {
        try {
            const resp = await creatFeatch.patch(`/jobs/${jobId}`, job, {
                headers: {
                    authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
                },
            });
            thunkAPI.dispatch(clearAllValue());
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    }
)

export const deleteJob = createAsyncThunk(
    'job/deleteJob',
    async (jobId, thunkAPI) => {
        thunkAPI.dispatch(showLoading());
        try {
            const resp = await creatFeatch.delete(`/jobs/${jobId}`, {
                headers: {
                    authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
                },
            });
            thunkAPI.dispatch(getAllJobs());
            return thunkAPI.fulfillWithValue(resp.data.msg);
        } catch (error) {
            thunkAPI.dispatch(hideLoading());
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    }
);

const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        handleChange: (state, { payload: { name, value } }) => {
            state[name] = value;
        },
        setEditJob: (state, { payload }) => {
            return { ...state, isEditing: true, ...payload };
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
        },
        [editJob.pending]: (state) => {
            state.isLoading = true;
        },
        [editJob.fulfilled]: (state) => {
            state.isLoading = false;
            toast.success('Job Modified...');
        },
        [editJob.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },
        [deleteJob.pending]: (state) => {
            state.isLoading = true;
        },
        [deleteJob.fulfilled]: (state,{ payload }) => {
            state.isLoading = false;
            toast.success(payload);
        },
        [deleteJob.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },
    }
});

export const { handleChange, setEditJob, clearAllValue } = jobSlice.actions;
export default jobSlice.reducer;