import React from 'react';

const GTKArticleItem = (props) => {
  const { article, id } = props;

  const articleDiv = (
    <div className="GTKArticleItem" onClick={() => (window.location.replace(`/${id}`))} onKeyPress={() => (window.location.replace(`/${id}`))} tabIndex={0} role="button">
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
