import React from 'react';
import PropTypes from 'prop-types';
import { ComponentDiv } from '../sharedStyledComponents';
import GTKOrderList from './gTKOrderList';
import GTKInsiderTip from './gTKInsiderTip';
import GTKKnownList from './gTKKnownList';
import GTKArticleList from './gTKArticleList';

class GoodToKnow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurant: {},
      articles: [],
    };
  }

  componentDidMount() {
    const { id } = this.props;
    this.getKnownForData(id);
  }

  static getRestaurant(id) {
    return fetch(`/restaurants/${id}`).then(res => res.json());
  }

  static getArticles(id) {
    return fetch(`/articles/${id}`).then(res => res.json());
  }

  getKnownForData(id) {
    const promises = [
      GoodToKnow.getRestaurant(id),
      GoodToKnow.getArticles(id),
    ];

    Promise.all(promises)
      .then(data => (
        this.setState({
          restaurant: data[0],
          articles: data[1],
        })
      ));
  }

  render() {
    const { restaurant, articles } = this.state;

    return (
      <ComponentDiv id="goodToKnow">
        <GTKOrderList whatToOrder={restaurant.whatToOrder} />
        <GTKInsiderTip tip={restaurant.insiderTip} />
        <GTKKnownList knownFor={restaurant.knownFor} />
        {articles.length ? <GTKArticleList name={restaurant.name} id={restaurant.restaurantId} articles={articles} /> : ''}
      </ComponentDiv>
    );
  }
}

GoodToKnow.propTypes = {
  id: PropTypes.number.isRequired,
};

export default GoodToKnow;
