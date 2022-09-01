/*
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';

const App = () => {
  return (
    <>
    
      <Route component={PostListPage} path="/@:username" exact />
      <Route component={PostListPage} path="/" exact />
      <Route component={LoginPage} path= "/login"  />
      <Route component={RegisterPage} path= "/register"  />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:username/:postid" />
      
    </>
  );
};

export default App;

*/
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
