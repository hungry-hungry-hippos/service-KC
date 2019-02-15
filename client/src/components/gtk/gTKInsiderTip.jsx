import React from 'react';

const GTKInsiderTip = (props) => {
  const { tip } = props;

  let tipDiv = '';
  if (tip) {
    tipDiv = (
      <div id="GTKInsiderTip">
        <div className="SectionHeader GTKHeader">Insider Tip</div>
        <div>{tip}</div>
      </div>
    );
  }

  return tipDiv;
};

export default GTKInsiderTip;
