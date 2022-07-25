import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
// styles
import 'normalize.css'
import './assets/css/index.css'

// component
import App from './App'

// store
import {store} from './store'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <App tab="home" />
  </Provider>
)
