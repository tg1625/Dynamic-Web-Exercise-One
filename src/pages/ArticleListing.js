import React from 'react';
import ArticleCard from '../components/ArticleCard.js';

import Data from "../components/Data.js";

function ArticleListing() {
  // console.log('data', Data);
  return (
    <div className="articleListing">
      <header>
        <h1>Articles</h1>
      </header>
      <main>
        {Data.map((article, i) => (
          <ArticleCard key={i} article={article} />
        ))}
      </main>
    </div>
  );
}

export default ArticleListing;
