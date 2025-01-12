import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createArticle } from '../../redux/articlesSlice';
import { useNavigate } from 'react-router-dom';
import styles from './editorPage.module.css';

const EditorPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [categories, setCategories] = useState({
    technology: false,
    science: false,
    health: false,
  });
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calculateReadingTime = (text) => {
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / 200); // Assuming 200 words per minute
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validate form data before submitting
    if (!title || !content || !thumbnail || !Object.values(categories).includes(true)) {
      setError("Please fill out all required fields, including selecting at least one category.");
      return;
    }
  
    // Create the new article object
    const newArticle = {
      title,
      content,
      thumbnail,
      readingTime: calculateReadingTime(content),
      lastEdited: new Date().toISOString(),
      category: Object.keys(categories).filter((key) => categories[key]),
    };
  
    console.log('Creating Article with Data:', newArticle); // Debug log
  
    dispatch(createArticle(newArticle))
      .then(() => {
        console.log('Article created successfully. Navigating to homepage...');
        navigate('/');
      })
      .catch((error) => {
        console.error("Error creating article:", error);
        setError("An error occurred while creating the article.");
      });
  };  

  const handleCategoryChange = (e) => {
    const { name, checked } = e.target;
    setCategories((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <div className={styles.container}>
      <h1>Create New Article</h1>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="thumbnail">Thumbnail URL:</label>
          <input
            type="url"
            id="thumbnail"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={styles.textarea}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Categories:</label>
          <div>
            {Object.keys(categories).map((category) => (
              <label key={category} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name={category}
                  checked={categories[category]}
                  onChange={handleCategoryChange}
                />
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </label>
            ))}
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>
          Create Article
        </button>
      </form>
    </div>
  );
};

export default EditorPage;
