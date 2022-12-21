import React from 'react'
import { Info, Repos, User, Search, Navbar } from '../components'
import loadingImage from '../images/preloader.gif'
import { GithubContext } from '../context/context'
const Dashboard = () => {
  return (
    <main>
      {/* <Navbar></Navbar> */}
      {/* <Search /> */}
      <Info />
      <User />
      <Repos />
    </main>
  )
}

export default Dashboard

//! components in the components folder gathered together in the index.js in the components folder. From there they are exported. That is allows us to write one line of import instead of 5 different imports
