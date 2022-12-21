import React, { useState, useEffect, Children } from 'react'
import mockUser from './mockData.js/mockUser'
import mockRepos from './mockData.js/mockRepos'
import mockFollowers from './mockData.js/mockFollowers'
import axios from 'axios'

const rootUrl = 'https://api.github.com'

//! Create Context
const GithubContext = React.createContext()

//! Now we have access to two components --> Provider,Consumer --> but will just use Provider.

//! We dont want to wrap our application directly with Provider because we want more logic so we create a new component...
//! Whatever we pass in the value is gonna be accessible all throughout the app.
const GithubProvider = ({ children }) => {
  return (
    <GithubContext.Provider value={'hello'}>{children}</GithubContext.Provider>
  )
}

//! We need to export both GithubContext and GithubProvider
//! GithubContext --> in order to access data
//! GithubProvider --> in order to wrap our app

export { GithubProvider, GithubContext }
