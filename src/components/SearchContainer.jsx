import React, { useCallback, useEffect, useMemo } from 'react'

import Wrapper from '../assets/wrappers/SearchContainer'
import { useSelector, useDispatch } from 'react-redux'
import { debounce } from 'lodash'

// components
import { FormRow, FormRowSelect } from './'

// actions
import { clearValues, handleChange } from '../feature/allJobs/allJobsSlice'

const SearchContainer = () => {
  const dispatch = useDispatch()
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs)
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job)

  const handleSearch = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }))
  }
  const handleClear = () => {
    if (isLoading) return
    dispatch(clearValues())
  }

  const debouncedResults = useMemo(() => {
    return debounce(handleSearch, 300)
  }, [])

  useEffect(() => {
    return () => {
      debouncedResults.cancel()
    }
  }, [search])

  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          {/* search position */}

          <FormRow
            type="text"
            name="search"
            // value={search}
            handleChange={debouncedResults}
          />
          {/* search by status */}
          <FormRowSelect
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={['all', ...statusOptions]}
          />
          {/* search by type */}
          <FormRowSelect
            labelText="type"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={['all', ...jobTypeOptions]}
          />
          {/* sort */}
          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            className="btn btn-block btn-danger"
            type="button"
            disabled={isLoading}
            onClick={handleClear}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default SearchContainer
