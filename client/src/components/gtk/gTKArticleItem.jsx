import React from 'react';

const GTKArticleItem = (props) => {
  const { article, id } = props;

  const articleDiv = (
    <div className="GTKArticleItem">
      <a href={`/${id}`}>
        <div className="GTKArticleImage" style={{ backgroundImage: `url(${article.image})` }} />
        <div className="GTKArticleText">{article.name}</div>
      </a>
    </div>
  );

  return articleDiv;
};

export default GTKArticleItem;
