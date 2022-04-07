import React from 'react'
import Dashboard from '../../../pages/workingPages/Dashboard'
import Clients from '../../../pages/workingPages/Clients'
import Loans from '../../../pages/workingPages/Loans'
import Pawns from '../../../pages/workingPages/Pawns'
import Users from '../../../pages/workingPages/Users'
import Settings from '../../../pages/workingPages/Settings'


const MainPanel = () => {
  return (
    <>
      <Dashboard/>
      <Clients/>
      <Loans/>
      <Pawns/>
      <Users/>
      <Settings/>
    </>
  )
}

export default MainPanel