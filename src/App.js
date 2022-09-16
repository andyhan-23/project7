import React from "react";
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
      <Routes>
          <Route path="/" exact element={<PostListPage />} />
          <Route path="/login" exact element={<LoginPage  />} />
          <Route path="/register" exact element={<RegisterPage/>} />
          <Route path="/write" exact element={<WritePage/>} />
          <Route path="/post" exact element={<PostPage/>} />
      </Routes>
      
      </div>
    </BrowserRouter>
  );
}

export default App;

