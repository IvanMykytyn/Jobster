import React from 'react'
import Wrapper from '../assets/wrappers/StatsContainer'
import { useSelector } from 'react-redux/es/exports'

// react-icons
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa'

// components
import { StatItem } from './'

const StatsContainer = () => {
  const { stats } = useSelector((store) => store.allJobs)

  const defaultStats = [
    {
      title: 'pending applications',
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: '#e9b949',
      bcg: '#fcefc7',
    },
    {
      title: 'interviews scheduled',
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: 'jobs declined',
      count: stats.declined || 0,
      icon: <FaBug />,
      color: '#d66a6a',
      bcg: '#ffeeee',
    },
  ]

  return (
    <Wrapper>
      {defaultStats.map((stat, index) => {
        return <StatItem key={index} {...stat} />
      })}
    </Wrapper>
  )
}

export default StatsContainer
