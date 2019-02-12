import React from 'react';

const TagList = (props) => {
  const { id, tags } = props;

  let tagsDiv = '';
  if (tags) {
    tagsDiv = (
      <div id="summaryTags">
        {
          Object.keys(tags)
            .map(key => (
              <a href={`/${id}`} key={key}>
                {key === 'price' ? '$'.repeat(tags[key]) : tags[key]}
              </a>
            ))
            .reduce((prev, curr) => [prev, ' · ', curr])
        }
      </div>
    );
  }

  return tagsDiv;
};

export default TagList;
