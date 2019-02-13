import React from 'react';
import PropTypes from 'prop-types';
import Helpers from '../../utils/helpers';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    const { id } = props;

    this.state = {
      restaurantId: id,
      reviews: {},
    };
  }

  componentDidMount() {
    const { restaurantId } = this.state;
    this.getReviews(restaurantId);
  }

  getReviews(id) {
    fetch(`/reviews/${id}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          reviews: data,
        });
      });
  }

  render() {
    const { reviews } = this.state;

    let reviewList = '';
    if (reviews.length) {
      reviewList = (
        reviews.map(review => (
          <div key={Helpers.getKey()}>
            <img src={review.image} alt={review.name} style={{ width: '200px' }} />
            <h3>{review.name}</h3>
            <h4>{review.date}</h4>
            <p>
              <span>{review.stars}</span>
              {` ${review.description}`}
            </p>
          </div>
        ))
      );
    }

    return (
      <div id="reviews">
        <h2>Reviews</h2>
        {reviewList}
      </div>
    );
  }
}

Reviews.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Reviews;
