import React from 'react';

const GTKInsiderTip = (props) => {
  const { tip } = props;

  let tipDiv = '';
  if (tip) {
    tipDiv = (
      <div id="GTKInsiderTip">
        <h3>Insider Tip</h3>
        <div>{tip}</div>
      </div>
    );
  }

  return tipDiv;
};

export default GTKInsiderTip;
