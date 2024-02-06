import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { getToken } from './utils/HelperFunctions'
import store from './store'
import { fetchUserData } from './store/slices/authThunk'
import history from './utils/history'
import CustomRoutes from './routes/CustomRoutes'


if (getToken()) {
  store.dispatch(fetchUserData());
}

function App() {
  return (
      <Router history={history}>
        <ToastContainer />
        <Provider store={store}>
          <CustomRoutes />
        </Provider>
      </Router>
  )
}

export default App