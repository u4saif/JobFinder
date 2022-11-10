import { useDispatch, useSelector } from "react-redux"
import Wrapper from "../assets/wrappers/SearchContainer"
import { handleChange, clearAllValue } from "../feature/jobs/AlljobSlice"
import { FormInput } from "./FormInput"
import { FormSelect } from "./FormSelect"

export const SearchContainer = () => {
    const {
        isLoading,
        jobs,
        totalJobs,
        numOfPages,
        page,
        stats,
        monthlyApplications,
        search,
        searchStatus,
        searchType,
        searchStatusOptions,
        searchTypeOptions,
        sort,
        sortOptions,
    } = useSelector((store) => store.allJob);
    const dispatch = useDispatch();
    const handleJobInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(handleChange({ name, value }))
    }
    return (
        <Wrapper>
            <form className="form">
                <h3>Search Form</h3>
                <div className='form-center'>
                    {/* search */}
                    <FormInput
                        type='text'
                        name='search'
                        labelText='Search'
                        value={search}
                        handleChange={handleJobInput}
                    />
                    {/* search status */}
                    <FormSelect
                        name="searchStatus"
                        labelText="Status"
                        stelectOptions={searchStatusOptions}
                        value={searchStatus}
                        handleChange={handleJobInput}
                    />
                    {/* search Type */}
                    <FormSelect
                        name="searchType"
                        labelText="Type"
                        stelectOptions={searchTypeOptions}
                        value={searchType}
                        handleChange={handleJobInput}
                    />
                    {/* search Sort */}
                    <FormSelect
                        name="sort"
                        labelText="Sort "
                        stelectOptions={sortOptions}
                        value={sort}
                        handleChange={handleJobInput}
                    />
                    <button
                        type='button'
                        className='btn btn-block btn-danger'
                        onClick={() => dispatch(clearAllValue())}
                    >
                        clear
                    </button>
                </div>
            </form>
        </Wrapper>
    )
}
