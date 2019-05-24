import React from 'react';

const explodeOff = function ({ fillColor = "#FFF", lineColor = "#000" }) {
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
        <path style={{ fill: lineColor }}
          d="M72,28.046c21.783,0 39.467,17.685 39.467,39.467c0,21.783 -17.684,39.467 -39.467,39.467c-21.783,0 -39.467,-17.684 -39.467,-39.467c0,-21.782 17.684,-39.467 39.467,-39.467Zm0,7.067c17.882,0 32.4,14.518 32.4,32.4c0,17.882 -14.518,32.4 -32.4,32.4c-17.882,0 -32.4,-14.518 -32.4,-32.4c0,-17.882 14.518,-32.4 32.4,-32.4Z" />
      </g>
    </svg>
  )
}

export default explodeOff;
