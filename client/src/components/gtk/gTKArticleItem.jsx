import React from 'react';

const GTKArticleItem = (props) => {
  const { article, id } = props;

  const articleDiv = (
    <div className="GTKArticleItem">
      <div className="GTKArticleImage" style={{ backgroundImage: `url(${article.image})` }} />
      <div className="GTKArticleTextContainer">
        <div className="GTKArticleText">
          {article.name}
        </div>
      </div>
    </div>
  );

  return articleDiv;
};

export default GTKArticleItem;
