import React from 'react';
import PropTypes from 'prop-types';
import ReviewList from './reviewList';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      overall: '3',
      reviews: {},
    };
  }

  componentDidMount() {
    const { id } = this.props;
    this.getReviews(id);
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
