import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { GithubProvider } from './context/context'
import { Auth0Provider } from '@auth0/auth0-react'
// Domain
//dev - l1i7rqfki2f08t3s.eu.auth0.com
// Client ID
// HDFrJbwgsEdJWpDDWUyybKUU88w9SRPN
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-l1i7rqfki2f08t3s.eu.auth0.com'
      clientId='HDFrJbwgsEdJWpDDWUyybKUU88w9SRPN'
      redirectUri={window.location.origin}
      cacheLocation='localstorage' //! to be able to still logged if we navigate accidentaly navigate a different URL when we logged using Google or Twitter Auth
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
