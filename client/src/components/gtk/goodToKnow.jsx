import React from 'react';
import PropTypes from 'prop-types';
import GTKOrderList from './gTKOrderList';
import GTKInsiderTip from './gTKInsiderTip';
import GTKKnownList from './gTKKnownList';
import GTKArticleList from './gTKArticleList';

class GoodToKnow extends React.Component {
  constructor(props) {
    super(props);

    const { id } = props;

    this.state = {
      restaurantId: id,
      restaurant: {},
      articles: [],
    };
  }

  componentDidMount() {
    const { restaurantId } = this.state;
    this.getKnownForData(restaurantId);
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
      <div id="goodToKnow">
        <GTKOrderList whatToOrder={restaurant.whatToOrder} />
        <GTKInsiderTip tip={restaurant.insiderTip} />
        <GTKKnownList knownFor={restaurant.knownFor} />
        <GTKArticleList name={restaurant.name} articles={articles} />
      </div>
    );
  }
}

GoodToKnow.propTypes = {
  id: PropTypes.number.isRequired,
};

export default GoodToKnow;
