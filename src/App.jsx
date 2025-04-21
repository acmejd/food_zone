import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'
import Error from './pages/Error'
import ProtectedRoute from './components/ProtectedRoute'
import { Analytics } from "@vercel/analytics/react"


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<ProtectedRoute element={<Success />} />} />
          <Route path="/*" element={<Error />} />
          < Analytics />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
