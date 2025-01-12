const express = require('express');
const router = express.Router();

let articles = [
  {
    id: 1,
    title: 'The Rise of Quantum Computing: What You Need to Know',
    excerpt: 'Quantum computing is revolutionizing the tech world...',
    thumbnail: 'https://cdn.mos.cms.futurecdn.net/g84icgJSVZXbib7BxPpMJB-1200-80.jpg',
    readingTime: 6,
    categories: ['Technology', 'Science'],
    lastEdited: '2025-01-01',
    content: 'Quantum computing is a new paradigm in computing that leverages the principles of quantum mechanics...',
  },
  {
    id: 2,
    title: 'Exploring the Secrets of Deep Space',
    excerpt: 'Space exploration has entered a new golden age...',
    thumbnail: 'https://nationaltoday.com/wp-content/uploads/2022/05/18-Explore-Space.jpg',
    readingTime: 8,
    categories: ['Space', 'Astronomy'],
    lastEdited: '2025-01-02',
    content: 'With advancements in telescopes and spacecraft, humanity is uncovering the secrets of the cosmos...',
  },
  {
    id: 3,
    title: 'Top 10 AI Innovations of the Decade',
    excerpt: 'AI is transforming industries across the globe...',
    thumbnail: 'https://photutorial.com/wp-content/uploads/2023/04/Featured-image-AI-image-generators-by-Midjourney.png',
    readingTime: 5,
    categories: ['Technology', 'AI'],
    lastEdited: '2025-01-03',
    content: 'Artificial Intelligence has made significant strides in healthcare, finance, and more...',
  },
  {
    id: 4,
    title: 'How Climate Change is Affecting Wildlife',
    excerpt: 'The natural world is facing unprecedented challenges...',
    thumbnail: 'https://climate.nasa.gov/system/internal_resources/details/original/1209_shutterstock_88550854.jpg',
    readingTime: 7,
    categories: ['Environment', 'Wildlife'],
    lastEdited: '2025-01-04',
    content: 'Climate change has disrupted ecosystems globally, threatening species and biodiversity...',
  },
  {
    id: 5,
    title: 'The Future of Electric Vehicles',
    excerpt: 'EVs are shaping the future of transportation...',
    thumbnail: 'https://www.interactone.com/wp-content/uploads/2020/07/shutterstock_539550748-scaled.jpg',
    readingTime: 6,
    categories: ['Technology', 'Automotive'],
    lastEdited: '2025-01-05',
    content: 'Electric vehicles are becoming more accessible, leading to a greener future...',
  },
  {
    id: 6,
    title: 'The History of Virtual Reality',
    excerpt: 'VR has a fascinating journey from concept to reality...',
    thumbnail: 'https://techcrunch.com/wp-content/uploads/2016/10/mi-vr_03-1.jpg',
    readingTime: 5,
    categories: ['Technology', 'Entertainment'],
    lastEdited: '2025-01-06',
    content: 'Virtual Reality has grown from science fiction to a vital technology in gaming and training...',
  },
  {
    id: 7,
    title: 'The World of Cryptocurrencies in 2025',
    excerpt: 'Cryptocurrencies are evolving rapidly...',
    thumbnail: 'https://www.cryptoryancy.com/wp-content/uploads/2020/12/load-image-2.jpeg',
    readingTime: 7,
    categories: ['Finance', 'Technology'],
    lastEdited: '2025-01-07',
    content: 'Bitcoin, Ethereum, and other cryptocurrencies continue to shape the global economy...',
  },
  {
    id: 8,
    title: 'Top Travel Destinations for Adventure Seekers',
    excerpt: 'Discover breathtaking locations around the world...',
    thumbnail: 'https://pepnewz.com/wp-content/uploads/trek-1443592840-800-850x491.jpg',
    readingTime: 4,
    categories: ['Travel', 'Adventure'],
    lastEdited: '2025-01-08',
    content: 'From mountain peaks to deep-sea adventures, the world is full of thrilling destinations...',
  },
  {
    id: 9,
    title: 'The Art of Minimalist Living',
    excerpt: 'Simplify your life with these tips...',
    thumbnail: 'https://th.bing.com/th/id/R.d27e9718701ffa36214559b7d08ab47c?rik=QZH0ATWtFMEvOQ&riu=http%3a%2f%2fcdn.home-designing.com%2fwp-content%2fuploads%2f2019%2f05%2fminimalist-living-room.jpg&ehk=6Yxj2I5dNeFK8K8MYYAfywvv0j9OYV6F0rMW4J9SsD8%3d&risl=&pid=ImgRaw&r=0',
    readingTime: 5,
    categories: ['Lifestyle', 'Self-Improvement'],
    lastEdited: '2025-01-09',
    content: 'Minimalism encourages focusing on what truly matters in life...',
  },
  {
    id: 10,
    title: 'Breaking Down the James Webb Space Telescope Discoveries',
    excerpt: 'A deeper look into the universe...',
    thumbnail: 'https://th.bing.com/th/id/R.37feff650be921d587754000fa844528?rik=zwNuYDdN8dhM9g&riu=http%3a%2f%2fimages.hayneedle.com%2fmgen%2fmaster%3aZHUL053.jpg&ehk=9VHftIWdVojDU%2fKwyibF2ldxKU3VqejZ2%2feXTz6D0ws%3d&risl=&pid=ImgRaw&r=0',
    readingTime: 8,
    categories: ['Space', 'Science'],
    lastEdited: '2025-01-10',
    content: 'The James Webb Telescope is revealing the universe like never before...',
  },
  {
    id: 11,
    title: 'The Impact of Social Media on Mental Health',
    excerpt: 'Social media is changing how we interact...',
    thumbnail: 'https://homeforlifeadvantage.com/wp-content/uploads/2021/05/mental-health-blog.jpg',
    readingTime: 6,
    categories: ['Health', 'Technology'],
    lastEdited: '2025-01-11',
    content: 'While connecting us, social media also has significant effects on mental health...',
  },
  {
    id: 12,
    title: 'Exploring Renewable Energy Innovations',
    excerpt: 'Renewables are the key to a sustainable future...',
    thumbnail: 'https://th.bing.com/th/id/R.7e1e4379c00c83a177d9dcdc84cc106e?rik=3fYh8kRps9MQgg&riu=http%3a%2f%2fwww.ecomatcher.com%2fwp-content%2fuploads%2f2023%2f02%2fRenewable.jpg&ehk=LbH2zckGm31HTrMWIMgDGoumBHGEYfhuFaZij0mlaD0%3d&risl=&pid=ImgRaw&r=0',
    readingTime: 7,
    categories: ['Environment', 'Technology'],
    lastEdited: '2025-01-12',
    content: 'Solar, wind, and other renewables are driving the energy transition...',
  },
];

router.get('/', (req, res) => {
  res.json(articles);
});

router.get('/:id', (req, res) => {
  const articleId = parseInt(req.params.id, 10);
  const article = articles.find((article) => article.id === articleId);

  if (article) {
    res.json(article);
  } else {
    res.status(404).json({ message: 'Article not found' });
  }
});

router.post('/', (req, res) => {
  const { title, content, categories, thumbnail } = req.body;

  if (!title || !content || !categories || !thumbnail) {
    return res.status(400).json({ 
      message: 'All fields are required. Ensure title, content, categories, and thumbnail are provided.' 
    });
  }

  if (!Array.isArray(categories)) {
    return res.status(400).json({ message: 'Categories must be an array.' });
  }

  const readingTime = Math.ceil(content.trim().split(/\s+/).length / 200);

  const newArticle = {
    id: articles.length + 1,
    title,
    content,
    thumbnail,
    readingTime,
    lastEdited: new Date().toISOString(),
    categories,
  };

  articles.push(newArticle);

  res.status(201).json(newArticle);
});

module.exports = router;
