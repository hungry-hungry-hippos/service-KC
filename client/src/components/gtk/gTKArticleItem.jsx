import React from 'react';

const GTKArticleItem = (props) => {
  const { article } = props;

  const articleDiv = (
    <div className="GTKArticleItem">
      <img src={article.image} alt={article.name} style={{ width: '200px' }} />
      <p>{article.name}</p>
    </div>
  );

  return articleDiv;
};

export default GTKArticleItem;
