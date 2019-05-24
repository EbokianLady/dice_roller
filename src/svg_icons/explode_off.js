import React from 'react';

const explodeOff = function ({ fillColor = "#FFF", lineColor = "#000" }) {
  console.log(fillColor, lineColor);
  return (
    <svg width="100%" height="100%" viewBox="0 0 144 144"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      xmlnsserif="http://www.serif.com/"
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        strokeLinejoin: 'round',
        strokeMiterLimit: '1.41421'
      }}>
      <g id="explodeOff">
        <circle style={{ fill: fillColor }}
          cx="72" cy="67.513" r="39.467" />
        <circle style={{ fill: lineColor }}
          cx="72" cy="67.513" r="32.4" />
      </g>
    </svg>
  )
}

export default explodeOff;
