import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StarRating from './starRating';

export const ReviewItemDiv = styled.div`
  display: flex;
  flex-direction: row;
  font: 15px/20px 'Calibre-Regular';
  letter-spacing: 0.013em;
  padding-top: 24px;
  padding-bottom: 27px;
  border-bottom: 1px #d0d2d3 solid;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const ReviewPhoto = styled.div`
display: block;
flex: 1 1 100%;
max-width: 25%;
max-height: 100%;

a {
  text-decoration: none;
}

img {
  height: 72px;
  width: 72px;
}
`;

export const ReviewContent = styled.div`
  display: block;
  flex: 1 1 100%;
  max-width: 75%;
  max-height: none;

  &:focus {
    outline: none;
  }
`;

export const ReviewDate = styled.div`
  line-height: 32px;
  color: #656666;
`;

export const SeeMore = styled.span`
  color: #9b9b9b;
`;

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);

    const { review } = props;

    this.state = {
      dispDescription: review.description,
    };

    this.toggleDescription = this.toggleDescription.bind(this);
  }

  componentDidMount() {
    this.toggleDescription();
  }

  toggleDescription() {
    const { review } = this.props;
    const { dispDescription } = this.state;

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
    const { review } = this.props;
    const { dispDescription } = this.state;

    const reviewDiv = (
      <ReviewItemDiv>
        <ReviewPhoto>
          <a href={`/${review.restaurantId}`}>
            <img src={review.image} alt={review.name} />
          </a>
        </ReviewPhoto>
        <ReviewContent onClick={this.toggleDescription} onKeyPress={this.toggleDescription} role="button" tabIndex={0}>
          <div className="ReviewName">{review.name}</div>
          <ReviewDate>{review.date}</ReviewDate>
          <div className="Review">
            <StarRating stars={review.stars} />
            <span className="ReviewText">{` ${dispDescription}`}</span>
            {dispDescription === review.description ? '' : <SeeMore>... See More</SeeMore>}
          </div>
        </ReviewContent>
      </ReviewItemDiv>
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
