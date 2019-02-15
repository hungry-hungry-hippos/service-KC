import React from 'react';

const GTKInsiderTip = (props) => {
  const { tip } = props;

  let tipDiv = '';
  if (tip) {
    tipDiv = (
      <div id="GTKInsiderTip">
        <div className="SectionHeader GTKHeader">Insider Tip</div>
        <div className="GTKInsiderTipContent">
          <div className="TipTopDivider" />
          <div className="TipText">{tip}</div>
          <div className="TipBottomDivider" />
        </div>
      </div>
    );
  }

  return tipDiv;
};

export default GTKInsiderTip;
