import React, { useEffect } from 'react'
import Wrapper from '../assets/wrappers/JobsContainer'
import { useSelector, useDispatch } from 'react-redux'

// components
import { Loading, Job, PageBtnContainer } from './'

// actions
import { getJobs } from '../feature/allJobs/allJobsSlice'

const JobsContainer = () => {
  const dispatch = useDispatch()

  const {
    page,
    search,
    searchStatus,
    searchType,
    sort,
    jobs,
    totalJobs,
    isLoading,
    numOfPages,
  } = useSelector((store) => store.allJobs)

  useEffect(() => {
    dispatch(getJobs())
    // eslint-disable-next-line
  }, [page, search, searchStatus, searchType, sort])

  if (isLoading) {
    return <Loading center />
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <h5>{totalJobs} jobs Found</h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  )
}

export default JobsContainer
