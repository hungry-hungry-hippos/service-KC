import React from 'react';
import PropTypes from 'prop-types';

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

  static getKey() {
    return Math.random().toString(36).substr(2, 9);
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
          <div key={Reviews.getKey()}>
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
      <div>
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
