import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: row; /* Align children horizontally */
  align-items: center; /* Vertically align content */
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  margin-bottom: 20px; /* Add spacing between cards */

  &:hover {
    transform: translateY(-5px);
  }
`;

const Thumbnail = styled.img`
  flex-shrink: 0; /* Prevent the image from shrinking */
  width: 200px; /* Fixed width for the image */
  height: 200px; /* Fixed height for the image */
  object-fit: cover; /* Ensures the image covers the area without distortion */
  object-position: center; /* Centers the image */
`;

const Content = styled.div`
  flex: 1; /* Takes up the remaining space */
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center-align content vertically */
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  color: #333;
  font-weight: bold;
`;

const Excerpt = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 10px 0;
  line-height: 1.4;
`;

const Info = styled.p`
  font-size: 0.9rem;
  color: #999;
  margin: 5px 0;
`;

const Categories = styled.span`
  font-size: 0.9rem;
  color: #666;
  margin-left: 10px;
`;

const LastEdited = styled.p`
  font-size: 0.8rem;
  color: #bbb;
  margin-top: 10px;
`;

function ArticleCard({ article }) {
  return (
    <Card>
      <Content>
        <Link to={`/article/${article.id}`} aria-label={`Read more about ${article.title}`}>
          <Title>{article.title}</Title>
        </Link>
        <Excerpt>{article.excerpt}</Excerpt>
        <Info>
          <span>⏳ {article.readingTime} min read</span>
          <Categories> | {article.categories.join(', ')}</Categories>
        </Info>
        <LastEdited>Last Edited: {article.lastEdited}</LastEdited>
      </Content>
      <Thumbnail 
        src={article.thumbnail || '/assets/default-thumbnail.jpg'} 
        alt={article.title} 
        loading="lazy" 
      />
    </Card>
  );
}

export default ArticleCard;
