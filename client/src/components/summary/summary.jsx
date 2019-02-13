import React from 'react';
import PropTypes from 'prop-types';
import TagList from './summaryTags';
import ZReview from './summaryReview';

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

    return (
      <div id="summary">
        <h1>{restaurant.name}</h1>
        <p>{restaurant.headline}</p>
        <TagList id={restaurant.restaurantId} tags={restaurant.tags} />
        <ZReview description={restaurant.description} scores={restaurant.scores} />
      </div>
    );
  }
}

Summary.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Summary;
