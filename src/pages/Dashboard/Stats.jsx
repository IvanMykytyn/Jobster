import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getStats } from '../../feature/allJobs/allJobsSlice'

// components
import { Loading, ChartsContainer, StatsContainer } from '../../components'

const Stats = () => {
  const dispatch = useDispatch()
  const { isLoading, monthlyApplications } = useSelector(
    (store) => store.allJobs
  )

  useEffect(() => {
    dispatch(getStats())
    // eslint-disable-next-line
  }, [])

  if (isLoading) {
    return <Loading center />
  }

  return (
    <div>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </div>
  )
}

export default Stats
