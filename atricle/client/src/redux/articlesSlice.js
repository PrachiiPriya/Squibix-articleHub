import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch articles
export const fetchArticles = createAsyncThunk('articles/fetchArticles', async () => {
  try {
    console.log("Fetching articles..."); // Debug log
    const response = await axios.get('http://localhost:5000/api/articles');
    console.log("Articles fetched successfully:", response.data); // Debug log
    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw new Error(error.response?.data?.message || error.message); // More descriptive error handling
  }
});

// Create article
export const createArticle = createAsyncThunk('articles/createArticle', async (newArticle) => {
  try {
    const response = await axios.post('http://localhost:5000/api/articles', newArticle)
     // Ensure the correct base URL
    return response.data;
  } catch (error) {
    console.error("Error creating article:", error);
    throw new Error(error.response?.data?.message || error.message); // More descriptive error handling
  }
});

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    list: [],
    status: 'idle', // 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createArticle.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createArticle.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = [...state.list, action.payload]; // Add the newly created article to the list immediately
      })
      .addCase(createArticle.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default articlesSlice.reducer;
