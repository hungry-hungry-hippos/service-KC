import React from 'react';
import styled from 'styled-components';

export const SummaryTags = styled.div`
  a {
    font: 15px/24px 'Calibre-Regular';
    letter-spacing: 0.013em;
    color: #656666;
    padding-top: 3px;
    text-decoration: none;
    border-bottom: 1px #656666 solid;
  }

  a:hover {
    border-color: #b70038;
    color: #b70038;
  }
`;

const TagList = (props) => {
  const { id, tags } = props;

  let tagsDiv = '';
  if (tags) {
    tagsDiv = (
      <SummaryTags id="summaryTags">
        {
          Object.keys(tags)
            .map(key => (
              <a href={`/${id}`} key={key}>
                {key === 'price' ? '$'.repeat(tags[key]) : tags[key]}
              </a>
            ))
            .reduce((prev, curr) => [prev, ' · ', curr])
        }
      </SummaryTags>
    );
  }

  return tagsDiv;
};

export default TagList;
