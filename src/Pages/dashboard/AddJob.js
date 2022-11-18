import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import {FormInput} from '../../components/FormInput';
import { FormSelect } from '../../components/FormSelect';
import { handleChange,clearAllValue, creatJobThunk,editJob } from '../../feature/jobs/JobSlice';

export const AddJob = () => {
  const  {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store)=>store.job);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({ name: 'jobLocation', value: user.location }));
    }
  }, []);
  const handleSubmit=(e)=>{
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      toast.error('Please Fill Out All Fields');
      return;
    }
    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: {
            position,
            company,
            jobLocation,
            jobType,
            status,
          },
        })
      );
      return;
    }
    dispatch(creatJobThunk({status,position,company,jobLocation,jobType}));
    console.warn({status,position,company,jobLocation,jobType});
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({name,value}))
  };

  
  const ChangeEvent=(e)=>{

  };

  return (
    <Wrapper className="full-page">
      <form className="form">
      <h3>{isEditing ? 'edit job' : 'add job'}</h3>
      <div className='form-center'>
          {/* position */}
          <FormInput
            type='text'
            name='position'
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormInput
            type='text'
            name='company'
            value={company}
            handleChange={handleJobInput}
          />
          {/* location */}
          <FormInput
            type='text'
            labelText='job location'
            name='jobLocation'
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* job status */}
          <FormSelect
          name="status"
          labelText="Job Status"
          stelectOptions={statusOptions}
          value={status}
          handleChange={handleJobInput}
          />

          {/* job type */}
          <FormSelect
          name="jobType"
          labelText="Job Type"
          stelectOptions={jobTypeOptions}
          value={jobType}
          handleChange={handleJobInput}
          />

          {/* btn container */}
          <div className='btn-container'>
            <button
              type='button'
              className='btn btn-block clear-btn'
              onClick={() => dispatch(clearAllValue())}
            >
              clear
            </button>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}
