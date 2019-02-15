import React from 'react';
import PropTypes from 'prop-types';
import ReviewList from './reviewList';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    const { id } = props;

    this.state = {
      restaurantId: id,
      overall: '3',
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
    const { overall, reviews } = this.state;

    return (
      <div id="reviews">
        <ReviewList overall={overall} reviews={reviews} />
      </div>
    );
  }
}

Reviews.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Reviews;
