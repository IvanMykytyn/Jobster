import React from 'react'
import Wrapper from '../assets/wrappers/Job'
import { useDispatch } from 'react-redux'

import moment from 'moment'

// router-dom
import { Link } from 'react-router-dom'

// components
import { JobInfo } from './'

// icons
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'

// actions
import { deleteJob } from '../feature/allJobs/allJobsSlice'
import { handleChange, setEditJob } from '../feature/job/jobSlice'

const Job = ({
  _id,
  position,
  company,
  status,
  jobType,
  jobLocation,
  createdAt,
}) => {
  const dispatch = useDispatch()

  const date = moment(createdAt).format('MMM Do, YYYY')

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/add-job"
              className="btn edit-btn"
              onClick={() => {
                dispatch(
                  setEditJob({
                    editJobId: _id,
                    position,
                    company,
                    status,
                    jobType,
                    jobLocation,
                  })
                )
              }}
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => {
                dispatch(deleteJob(_id))
              }}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  )
}

export default Job
