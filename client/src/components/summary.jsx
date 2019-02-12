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

    return (
      <div id="summary">
        <h2>Summary</h2>
        <h3>{restaurant.name}</h3>
      </div>
    );
  }
}

Summary.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Summary;
