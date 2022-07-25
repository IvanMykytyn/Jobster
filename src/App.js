import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import { Error, Dashboard, Landing, Register } from './pages'

// toastify setup
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard/>} />
          <Route path="landing" element={<Landing/>} />
          <Route path="register" element={<Register/>} />
          <Route path="*" element={<Error/>} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
