import React, { useState, useEffect } from 'react';
import LoginPage from '../../Pages/LoginPage/LoginPage';
import UserListPage from '../../Pages/UserListPage/UserListPage';
import { Routes, Route } from 'react-router-dom';
import ProtectedLayout from "./Layout";
import NotFound from "./notFound";
import UserPage from "../../Pages/UserPage/UserPage"

function App() {

  return (
    <Routes>
      <>
        <Route path="/" element={<LoginPage />} />

        <Route element={<ProtectedLayout />}>
          <Route path="/home/userlist" element={<UserListPage />} />
          <Route path="/home/userlist/user" element={<UserPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
        
      </>
    </Routes>
  );
}

export default App;