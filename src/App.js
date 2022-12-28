import React from 'react'
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </AuthWrapper>
  )
}

export default App

//?? ------------- React Router -----------
//! exact prop --> only navigate to Dashboard ("/") if it is exactly match the URL
//! It is better user experience to setup a Error page if anyone type a URL and in that URL there is no related page in our app...
//! For Error page (path='*') used. Means that whatever we write on the URL this is always match.
