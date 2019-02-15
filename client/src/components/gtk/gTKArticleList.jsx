import React from 'react';
import Helpers from '../../utils/helpers';
import GTKArticleItem from './gTKArticleItem';

const GTKArticleList = (props) => {
  const { name, articles } = props;

  let articleList = '';
  if (articles && articles.length) {
    articleList = (
      <div id="GTKArticleList">
        <div className="SectionHeader GTKHeader">
          {`Zagat Mentions Of ${name}`}
        </div>
        {articles.map(article => (
          <GTKArticleItem article={article} key={Helpers.getKey()} />
        ))}
      </div>
    );
  }

  return articleList;
};

export default GTKArticleList;
