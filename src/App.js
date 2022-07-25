import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import { Error, Dashboard, Landing, Register } from './pages'

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
    </BrowserRouter>
  )
}

export default App
