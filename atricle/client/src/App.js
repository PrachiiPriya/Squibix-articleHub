import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/homePage/HomePage';
import ArticlePage from './components/articlePage/ArticlePage';
import EditorPage from './components/EditorPage/EditorPage';
import BookmarkPage from './components/bookmark/BookmarkPage';
import Navbar from './components/header/Navbar';  // Import Navbar
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />  {/* Render Navbar here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/editor" element={<EditorPage />} />
        <Route path="/bookmarks" element={<BookmarkPage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
