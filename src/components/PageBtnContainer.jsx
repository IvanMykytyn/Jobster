import React from 'react'
import Wrapper from '../assets/wrappers/PageBtnContainer'
import { useSelector, useDispatch } from 'react-redux'

// react-icons
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'

// actions
import { setPage } from '../feature/allJobs/allJobsSlice'

const PageBtnContainer = () => {
  const dispatch = useDispatch()
  const { page, numOfPages } = useSelector((store) => store.allJobs)

  const pages = Array.from({ length: numOfPages }, (_, i) => i + 1)

  const prevPage = () => {
    if (page === 1) {
      return dispatch(setPage(numOfPages))
    }
    dispatch(setPage(page - 1))
  }
  const nextPage = () => {
    if (page === numOfPages) {
      return dispatch(setPage(1))
    }
    dispatch(setPage(page + 1))
  }

  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {pages.map((pageNumber) => {
          return (
            <button
              type="button"
              className={pageNumber === page ? 'pageBtn active' : 'pageBtn'}
              key={pageNumber}
              onClick={() => dispatch(setPage(pageNumber))}
            >
              {pageNumber}
            </button>
          )
        })}
      </div>
      <button className="next-btn" onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  )
}

export default PageBtnContainer
