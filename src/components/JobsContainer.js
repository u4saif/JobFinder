import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/JobsContainer';
import { getAllJobs } from '../feature/jobs/AlljobSlice';
import  Job  from './Job';
import Loading from "../components/Loading";

export const JobsContainer = () => {
  const dispatch = useDispatch();
  const { jobs , isLoading,page,search,sort,searchStatus, searchType} = useSelector((store) => store.allJob);

  useEffect(() => {
    dispatch(getAllJobs());
  }, [search,page,sort,searchStatus,searchType]);

  if (isLoading) {
    return (
      <Wrapper>
        <Loading center={true}/>
      </Wrapper>
    );
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>jobs info</h5>
      <div className='jobs'>
        {jobs.map((job) => {
          return <Job key={job._id} {...job}/>;
        })}
      </div>
    </Wrapper>
  );
}
