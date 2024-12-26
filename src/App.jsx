import React from 'react';
import './App.css';
import Nav from './component/nav';
import Main from './component/main';
import BlogList from './component/BlogList';
import Shop from './component/shop';
import Login from './component/login';
import Register from './component/register';
import Footer from './component/footer';  
import Contact from './component/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<BlogList />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<BlogList />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />  
    </Router>
  );
}

export default App;
