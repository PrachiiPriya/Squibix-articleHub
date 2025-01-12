import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './articlePage.module.css'; // Import the CSS module

const ArticlePage = () => {
  const { id } = useParams(); // Get the article ID from the URL params
  const [article, setArticle] = useState(null); // Store a single article
  const [fontSize, setFontSize] = useState(16); // Font size state
  const [progress, setProgress] = useState(0); // Scroll progress
  const navigate = useNavigate(); // For redirection

  // Fetch article on initial load
  useEffect(() => {
    fetch(`http://localhost:5000/api/articles/${id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data)); // Set article data
  }, [id]);

  // Update reading progress based on scroll position
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollProgress = (scrollTop / (docHeight - winHeight)) * 100;
    setProgress(scrollProgress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Increase or decrease font size
  const changeFontSize = (operation) => {
    if (operation === 'increase') {
      setFontSize(fontSize + 2);
    } else if (operation === 'decrease') {
      setFontSize(fontSize - 2);
    }
  };

  // Handle editing the article
  const handleEditClick = () => {
    navigate(`/edit-article/${id}`); // Redirect to the edit page
  };

  // If article is not loaded yet, show a loading message
  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      {/* Sticky Header */}
      <div className={styles.stickyHeader}>
        <h1>{article.title}</h1>
        <p>Last edited on {new Date(article.lastEdited).toLocaleDateString()}</p>
        <p className={styles.readingTime}>{article.readingTime} min read</p>
      </div>

      {/* Scroll Progress */}
      <div className={styles.progressContainer}>
        <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
      </div>

      {/* Font Size Controls */}
      <div className={styles.fontSizeControls}>
        <button onClick={() => changeFontSize('decrease')}>A-</button>
        <button onClick={() => changeFontSize('increase')}>A+</button>
      </div>

      {/* Article Content */}
      <div className={styles.articleContent} style={{ fontSize: `${fontSize}px` }}>
        <div>{article.content}</div>
      </div>

      {/* Edit Button */}
      <button onClick={handleEditClick} className={styles.editButton}>
        Edit Article
      </button>
    </div>
  );
};

export default ArticlePage;
