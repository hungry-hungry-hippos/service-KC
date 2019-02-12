import React from 'react';
import PropTypes from 'prop-types';

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
    const promises = [GoodToKnow.getRestaurant(id), GoodToKnow.getArticles(id)];

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

    let whatToOrder = '';
    if (restaurant.whatToOrder) {
      whatToOrder = (
        restaurant.whatToOrder
          .map(item => (
            <div key={item.name}>
              <img src={item.icon} alt={item.name} style={{ width: '200px' }} />
              <p>{item.name}</p>
            </div>
          ))
      );
    }

    let knownFor = '';
    if (restaurant.knownFor) {
      knownFor = (
        restaurant.knownFor
          .map(item => (
            <div key={item.name}>
              <img src={item.icon} alt={item.name} style={{ width: '200px' }} />
              <p>{item.name}</p>
            </div>
          ))
      );
    }

    let articleList = '';
    if (articles) {
      articleList = (
        articles.map(article => (
          <div key={article.name}>
            <img src={article.image} alt={article.name} style={{ width: '200px' }} />
            <p>{article.name}</p>
          </div>
        ))
      );
    }

    return (
      <div>
        <h2>Good To Know</h2>
        {whatToOrder.length ? <h3>What To Order</h3> : ''}
        {whatToOrder}
        {restaurant.insiderTip ? (
          <div>
            <h3>Insider Tip</h3>
            <div>{restaurant.insiderTip}</div>
          </div>
        ) : ''}
        {knownFor.length ? <h3>Known For</h3> : ''}
        {knownFor}
        {articles.length ? (
          <h3>
            {`Zagat Mentions Of ${restaurant.name}`}
          </h3>
        ) : ''}
        {articleList}
      </div>
    );
  }
}

GoodToKnow.propTypes = {
  id: PropTypes.number.isRequired,
};

export default GoodToKnow;
