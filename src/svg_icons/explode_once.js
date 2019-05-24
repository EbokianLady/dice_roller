import React from 'react';

const explodeOnce = function ({ fillColor = "#FFF", lineColor = "#000" }) {
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
      <g id="explodeOnce">
        <path style={{ fill: fillColor }}
          d="M17.877,41.733c0.587,-2.725 37.272,-3.29 38.642,-2.684c-0.952,0.327 18.957,-33.653 23.39,-33.811c3.3,-0.228 16.318,36.996 16.056,37.827c0.217,-0.4 37.572,7.951 37.97,12.161c1.668,3.3 -28.606,26.361 -29.568,26.749c0.65,-0.234 3.951,37.429 0.925,39.538c-1.938,1.352 -33.223,-18.57 -33.292,-18.74c0,0 -36.425,12.107 -38.436,10.402c-1.945,-1.651 6.52,-40.055 6.52,-40.055c-1.447,-0.519 -24.02,-29.33 -22.207,-31.387Z" />
        <path style={{ fill: lineColor }}
          d="M56.489,39.038c-0.278,-0.759 19.059,-33.644 23.42,-33.8c3.3,-0.228 16.318,36.996 16.056,37.827c0.217,-0.4 37.572,7.951 37.97,12.161c1.668,3.3 -28.606,26.361 -29.568,26.749c0.65,-0.234 3.951,37.429 0.925,39.538c-1.938,1.352 -33.223,-18.57 -33.292,-18.74c0,0 -36.425,12.107 -38.436,10.402c-1.945,-1.651 6.52,-40.055 6.52,-40.055c-1.447,-0.519 -24.02,-29.33 -22.207,-31.387c0.584,-2.708 36.814,-3.283 38.612,-2.695c0.005,0.013 0.015,0.017 0.03,0.011c-0.008,-0.004 -0.018,-0.007 -0.03,-0.011Zm34.773,10.12c0.455,-1.123 -10.683,-30.193 -13.63,-29.276c-4.553,2.453 -14.924,23.213 -14.526,25.762c0.696,0.07 0.87,0.15 0.353,0.23c-0.205,0.074 -0.319,-0.01 -0.353,-0.23c-4.252,-0.426 -27.986,-0.473 -33.135,2.278c-0.96,2.34 16.925,24.508 18.203,24.078c-0.409,0.117 -8.323,30.338 -5.772,31.344c2.668,1.923 29.816,-7.778 29.598,-8.501c0.018,0.204 24.376,16.15 26.067,14.909c1.773,-1.303 -1.343,-30.918 -1.686,-30.885c0,0 23.889,-17.868 23.379,-20.455c-0.45,-3.049 -28.136,-9.709 -28.498,-9.254l-0.004,0.009c0,-0.003 0.001,-0.006 0.004,-0.009Z"/>
      </g>
    </svg>
  )
}

export default explodeOnce;
