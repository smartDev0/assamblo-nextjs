import React from 'react';

const ClutchWidget = ({ type = 3, height = 350 }) => {
  return (
    <div
      className="clutch-widget"
      data-url="https://widget.clutch.co"
      data-widget-type={type}
      data-height={height}
      data-clutchcompany-id="1556757"
    />
  );
};

export default ClutchWidget;
