import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../../redux/articlesSlice';
import ArticleCard from '../homePage/ArticleCard';
import SearchBar from '../header/SearchBar';
import FilterPills from '../header/FilterPills'; 

const HomePage = () => {
  const dispatch = useDispatch();
  const { list, status, error } = useSelector((state) => state.articles);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchArticles());
    }
  }, [dispatch, status]);

  const filteredArticles = useMemo(() => {
    let filtered = list;

    console.log("Selected Filter:", selectedFilter);
    console.log("Article Categories:", list.map((article) => article.categories));

    if (selectedFilter !== 'all') {
      filtered = list.filter((article) => {
        const normalizedCategories = article.categories.map(category => category.toLowerCase());
        const normalizedFilter = selectedFilter.toLowerCase();

        console.log("Filtering article:", article.title, "Categories:", normalizedCategories);

        return normalizedCategories.includes(normalizedFilter);
      });
    }

    if (searchTerm) {
      filtered = filtered.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [list, selectedFilter, searchTerm]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <FilterPills 
        filters={['all', 'technology', 'health', 'science']} 
        selectedFilter={selectedFilter}
        onFilterSelect={setSelectedFilter} 
      />
      <div className="article-list">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
