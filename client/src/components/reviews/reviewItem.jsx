import React from 'react';
import PropTypes from 'prop-types';
import StarRating from './starRating';

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);

    const { review } = props;
    this.state = {
      review,
      dispDescription: review.description,
    };

    this.toggleDescription = this.toggleDescription.bind(this);
  }

  componentDidMount() {
    this.toggleDescription();
  }

  toggleDescription() {
    const { review, dispDescription } = this.state;

    if (review.description.length > 250) {
      if (dispDescription === review.description) {
        let truncDesc = review.description.slice(0, 250);
        const lastSpace = truncDesc.lastIndexOf(' ');
        if (lastSpace > -1) {
          truncDesc = truncDesc.slice(0, lastSpace);
        }

        this.setState({
          dispDescription: truncDesc,
        });
      } else {
        this.setState({
          dispDescription: review.description,
        });
      }
    }
  }

  render() {
    const { review, dispDescription } = this.state;

    const reviewDiv = (
      <div className="ReviewItem">
        <div className="ReviewPhoto">
          <a href={`/${review.restaurantId}`}>
            <img src={review.image} alt={review.name} />
          </a>
        </div>
        <div className="ReviewContent" onClick={this.toggleDescription} onKeyPress={this.toggleDescription} role="button" tabIndex={0}>
          <div className="ReviewName">{review.name}</div>
          <div className="ReviewDate">{review.date}</div>
          <div className="Review">
            <StarRating stars={review.stars} />
            <span className="ReviewText">{` ${dispDescription}`}</span>
            {dispDescription === review.description ? '' : <span className="SeeMore">... See More</span>}
          </div>
        </div>
      </div>
    );

    return reviewDiv;
  }
}

ReviewItem.propTypes = {
  review: PropTypes.shape({
    restaurantId: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string,
    stars: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default ReviewItem;
