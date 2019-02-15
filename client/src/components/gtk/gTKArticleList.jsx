import React from 'react';
import Helpers from '../../utils/helpers';
import GTKArticleItem from './gTKArticleItem';

const GTKArticleList = (props) => {
  const { name, id, articles } = props;

  let articleList = '';
  if (articles && articles.length) {
    articleList = (
      <div id="GTKArticleList">
        <div className="SectionHeader GTKHeader">
          {`Zagat Mentions Of ${name}`}
        </div>
        <div id="GTKArticles">
          {articles.map(article => (
            <GTKArticleItem article={article} id={id} key={Helpers.getKey()} />
          ))}
        </div>
      </div>
    );
  }

  return articleList;
};

export default GTKArticleList;
