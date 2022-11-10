import { JobsContainer } from "../../components/JobsContainer"
import Loading from "../../components/Loading"
import { SearchContainer } from "../../components/SearchContainer"

export const AllJobs = () => {
  return (
    <>
      <SearchContainer />
      <JobsContainer />
      <Loading center={true}/>
    </>
  )
}
