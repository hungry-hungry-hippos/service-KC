import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ComponentDiv } from '../sharedStyledComponents';
import TagList from './summaryTags';
import ZReview from './summaryReview';

export const SummaryTitle = styled.h1`
  font: 36px/44px 'Calibre-Medium';
  letter-spacing: .086em;
  text-transform: uppercase;
  margin: 0;
  padding-top: 20px;
`;

export const SummarySubtitle = styled.h2`
  font: 15px/24px 'Calibre-Regular';
  letter-spacing: 0.013em;
  color: #656666;
  margin: 0;
  padding-top: 2px;
`;

class Summary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurant: {},
    };
  }

  componentDidMount() {
    const { id } = this.props;

    this.getRestaurant(id);
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
      <ComponentDiv id="summary">
        <SummaryTitle>{restaurant.name}</SummaryTitle>
        <SummarySubtitle>{restaurant.headline}</SummarySubtitle>
        <TagList id={restaurant.restaurantId} tags={restaurant.tags} />
        <ZReview description={restaurant.description} scores={restaurant.scores} />
      </ComponentDiv>
    );
  }
}

Summary.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Summary;
