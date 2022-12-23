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
  const [githubUser, setGithubUser] = useState(mockUser)
  const [repos, setRepos] = useState(mockRepos)
  const [followers, setFollowers] = useState(mockFollowers)

  //* Request and Loading
  const [requests, setRequests] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  //* Errors
  const [error, setError] = useState({ show: false, msg: '' })

  //* Searching user functionality
  const searchGithubUser = async (user) => {
    //! everytime we start searching we wanna make sure we remove the error message if there is...
    toggleError()
    setIsLoading(true)
    const response = await axios(`${rootUrl}/users/${user}`).catch((err) => {
      console.log(err)
    })
    if (response) {
      setGithubUser(response.data)
      //! login and followers_url are inside the data object that we fetch
      const { login, followers_url } = response.data
      //* Repos
      axios(`${rootUrl}/users/${login}/repos?per_page=100`).then((response) =>
        //console.log(response)
        setRepos(response.data)
      )
      //* Followers
      axios(`${followers_url}?per_page=100`).then((response) =>
        //console.log(response)
        setFollowers(response.data)
      )
      // repos
      // https://api.github.com/users/john-smilga/repos?per_page=100
      // followers
      // https://api.github.com/users/john-smilga/followers
    } else {
      toggleError(true, 'there is no user with that username')
    }
    checkRequests()
    setIsLoading(false)
  }

  //* Check Requests
  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data

        setRequests(remaining)
        if (remaining === 0) {
          //* Throw an error if no more request
          toggleError(true, 'sorry, you have exceeded your hourly rate limit!')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  //! We pass a default value so that when we invoke it without passing anythink, we will set back the default values
  function toggleError(show = false, msg = '') {
    setError({ show, msg })
  }

  //* Error
  useEffect(checkRequests, [])
  return (
    // //! ES6 syntax --> if the property name is equal to a variable name that has the value, we can write just the property name... (githubUser: githubUser === githubUser)
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        error,
        searchGithubUser,
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

//! We need to export both GithubContext and GithubProvider
//! GithubContext --> in order to access data
//! GithubProvider --> in order to wrap our app

export { GithubProvider, GithubContext }
