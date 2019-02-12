import React from 'react';
import PropTypes from 'prop-types';

class Summary extends React.Component {
  constructor(props) {
    super(props);

    const { id } = props;

    this.state = {
      restaurantId: id,
      restaurant: {},
    };
  }

  componentDidMount() {
    const { restaurantId } = this.state;

    this.getRestaurant(restaurantId);
  }

  getRestaurant(id) {
    fetch(`/restaurants/${id}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          restaurant: data,
        });
      });
  }

  render() {
    const { restaurant } = this.state;

    let tags = '';
    if (restaurant.tags) {
      tags = (
        <div>
          {
            Object.keys(restaurant.tags)
              .map(key => (
                <a href={`/${restaurant.restaurantId}`} key={key}>{restaurant.tags[key]}</a>
              ))
              .reduce((prev, curr) => [prev, ' · ', curr])
          }
        </div>
      );
    }

    let scores = '';
    if (restaurant.scores) {
      scores = (
        <div>
          {
            Object.keys(restaurant.scores)
              .map(key => (
                <p key={key}>{`${key} : ${restaurant.scores[key]}`}</p>
              ))
          }
        </div>
      );
    }

    return (
      <div id="summary">
        <h2>Summary</h2>
        <h1>{restaurant.name}</h1>
        <p>{restaurant.headline}</p>
        {tags}
        {restaurant.description ? <h3>The Zagat Review</h3> : ''}
        {scores}
        <p dangerouslySetInnerHTML={{ __html: restaurant.description }} />
      </div>
    );
  }
}

Summary.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Summary;
