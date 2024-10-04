import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react'
import './App.css'

function App() {

  return (
    <Router>
      <Header />
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/settings/edit-profile" element={<EditProfile />} />
          <Route path="/settings/preferences" element={<Preferences />} />
          <Route path="/settings/security" element={<Security />} />
          <Route path="/settings" element={<Navigate to="/settings/edit-profile" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
