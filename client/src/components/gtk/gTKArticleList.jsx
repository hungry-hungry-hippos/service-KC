import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GTKHeader } from '../sharedStyledComponents';
import Helpers from '../../utils/helpers';
import GTKArticleItem from './gTKArticleItem';

export const GTKArticles = styled.div`
  margin-top: 17px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const GTKShowMore = styled.div`
  text-align: center;
  margin-top: 40px;
`;

export const GTKShowMoreButton = styled.button`
  display: inline-block;
  height: 40px;
  width: 192px;
  text-align: center;
  color: #b70038;
  font: 16px/24px 'Calibre-Medium';
  letter-spacing: 0.086em;
  text-transform: uppercase;
  background: none;
  border: 2px #b70038 solid;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: #b70038;
  }

  &:focus {
    outline: none;
  }
`;

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
          <GTKHeader>
            {`Zagat Mentions Of ${name}`}
          </GTKHeader>
          <GTKArticles>
            {articles.slice(0, showLength).map(article => (
              <GTKArticleItem article={article} id={id} key={Helpers.getKey()} />
            ))}
          </GTKArticles>
          {articles.length > 2 ? (
            <GTKShowMore>
              <GTKShowMoreButton type="button" onClick={this.toggleShowAll}>
                {showLength === articles.length ? 'Show Less' : `Show All (${articles.length})`}
              </GTKShowMoreButton>
            </GTKShowMore>
          ) : ''}
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
