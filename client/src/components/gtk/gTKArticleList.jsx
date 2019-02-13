import React from 'react';
import Helpers from '../../utils/helpers';
import GTKArticleItem from './gTKArticleItem';

const GTKArticleList = (props) => {
  const { name, articles } = props;

  let articleList = '';
  if (articles && articles.length) {
    articleList = (
      <div id="GTKArticleList">
        <h3>
          {`Zagat Mentions Of ${name}`}
        </h3>
        {articles.map(article => (
          <GTKArticleItem article={article} key={Helpers.getKey()} />
        ))}
      </div>
    );
  }

  return articleList;
};

export default GTKArticleList;
