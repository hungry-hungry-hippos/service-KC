import React from 'react';
import PropTypes from 'prop-types';
import Helpers from '../../utils/helpers';
import GTKArticleItem from './gTKArticleItem';

class GTKArticleList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showLength: 2,
    };

    this.toggleShowAll = this.toggleShowAll.bind(this);
  }

  toggleShowAll() {
    const { articles } = this.props;
    const { showLength } = this.state;
    this.setState({
      showLength: showLength === articles.length ? 2 : articles.length,
    });
  }

  render() {
    const { name, id, articles } = this.props;
    const { showLength } = this.state;

    let articleList = '';
    if (articles && articles.length) {
      articleList = (
        <div id="GTKArticleList">
          <div className="SectionHeader GTKHeader">
            {`Zagat Mentions Of ${name}`}
          </div>
          <div id="GTKArticles">
            {articles.slice(0, showLength).map(article => (
              <GTKArticleItem article={article} id={id} key={Helpers.getKey()} />
            ))}
          </div>
          {articles.length > 2 ? (
            <div id="GTKShowMore">
              <button type="button" onClick={this.toggleShowAll} id="GTKShowMoreButton">
                {showLength === articles.length ? 'Show Less' : `Show All (${articles.length})`}
              </button>
            </div>
          ) : ''
}
        </div>
      );
    }

    return articleList;
  }
}

GTKArticleList.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  articles: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    restaurantIds: PropTypes.arrayOf(PropTypes.number),
  })).isRequired,
};

export default GTKArticleList;
