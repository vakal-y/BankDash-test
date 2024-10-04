import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import EditeProfile from './components/ProfileSettings/EditProfile/EditProfile';
import Preferences from './components/ProfileSettings/Preferences/Preferences';
import Security from './components/ProfileSettings/Security/Security';
import styles from './App.module.scss';

function App() {

  return (
    <Router>
      <Header />
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/settings/edit-profile" element={<EditeProfile />} />
          <Route path="/settings/preferences" element={<Preferences />} />
          <Route path="/settings/security" element={<Security />} />
          <Route path="/settings" element={<Navigate to="/settings/edit-profile" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
