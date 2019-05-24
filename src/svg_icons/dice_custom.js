import React from 'react';

const diceCustom = function ({ fillColor = "#FFF", lineColor = "#000" }) {
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
      <g id="custom">
        <path style={{ fill: fillColor }}
          d="M112.858,15.716c-2.942,-4.086 -9.307,-9.922 -17.664,-10.564c-10.54,-0.809 -35.352,-1.723 -47.815,-0.169c-3.928,0.49 -11.756,3.9 -17.116,13.026c-9.123,15.532 -26.217,42.168 -29.343,49.226c-0.458,1.035 -2.578,11.52 1.767,17.931c10.976,16.194 26.434,38.569 32.115,44.777c2.113,2.309 5.233,8.734 16.136,8.949c14.411,0.284 47.933,-0.147 52.414,-1.364c2.104,-0.572 8.42,-1.635 12.671,-10.017c6.207,-12.24 23.6,-42.944 26.147,-48.07c3.237,-6.515 1.865,-12.805 -1.656,-19.623c-2.746,-5.318 -22.349,-36.732 -27.656,-44.102Z" />
        <path style={{ fill: lineColor }}
          d="M112.858,15.716c-2.942,-4.086 -9.307,-9.922 -17.664,-10.564c-10.54,-0.809 -35.681,-1.683 -48.143,-0.128c-3.928,0.49 -11.756,3.899 -17.117,13.025c-9.122,15.532 -25.888,42.128 -29.014,49.186c-0.458,1.035 -2.578,11.52 1.767,17.931c10.976,16.194 26.434,38.569 32.115,44.777c2.113,2.309 5.233,8.734 16.136,8.949c14.411,0.284 47.137,1.302 51.618,0.084c2.104,-0.571 8.42,-1.634 12.671,-10.017c6.207,-12.24 24.396,-44.392 26.943,-49.518c3.237,-6.515 1.865,-12.805 -1.656,-19.623c-2.746,-5.318 -22.349,-36.732 -27.656,-44.102Zm-2.655,3.672c-2.749,-3.819 -8.699,-9.274 -16.51,-9.873c-9.851,-0.757 -33.165,-1.84 -44.813,-0.387c-3.672,0.458 -10.988,3.644 -15.999,12.175c-8.526,14.517 -24.382,39.643 -27.304,46.239c-0.429,0.968 -2.41,10.768 1.652,16.76c10.258,15.136 24.707,36.049 30.017,41.852c1.975,2.159 4.891,8.164 15.082,8.365c13.469,0.265 44.005,1.311 48.194,0.173c1.967,-0.534 7.87,-1.527 11.843,-9.363c5.802,-11.44 22.855,-41.587 25.236,-46.378c3.025,-6.09 1.742,-11.969 -1.548,-18.341c-2.567,-4.971 -20.89,-34.333 -25.85,-41.222Zm-39.551,80.415c0.86,0 1.68,0.176 2.461,0.527c0.782,0.352 1.455,0.82 2.022,1.406c0.566,0.586 1.015,1.27 1.347,2.051c0.332,0.781 0.498,1.602 0.498,2.461c0,0.898 -0.166,1.729 -0.498,2.49c-0.332,0.762 -0.781,1.436 -1.347,2.022c-0.567,0.586 -1.24,1.045 -2.022,1.377c-0.781,0.332 -1.601,0.498 -2.461,0.498c-0.898,0 -1.738,-0.166 -2.519,-0.498c-0.781,-0.332 -1.465,-0.791 -2.051,-1.377c-0.586,-0.586 -1.045,-1.26 -1.377,-2.022c-0.332,-0.761 -0.498,-1.592 -0.498,-2.49c0,-0.859 0.166,-1.68 0.498,-2.461c0.332,-0.781 0.791,-1.465 1.377,-2.051c0.586,-0.586 1.27,-1.054 2.051,-1.406c0.781,-0.351 1.621,-0.527 2.519,-0.527Zm-1.816,-7.149c0,-3.398 0.312,-6.416 0.937,-9.052c0.625,-2.637 1.407,-5.059 2.344,-7.266c0.938,-2.207 1.944,-4.277 3.018,-6.211c1.074,-1.934 2.08,-3.887 3.017,-5.859c0.938,-1.973 1.719,-4.053 2.344,-6.241c0.625,-2.187 0.938,-4.648 0.938,-7.382c0,-2.539 -0.313,-4.747 -0.938,-6.622c-0.625,-1.875 -1.504,-3.437 -2.637,-4.687c-1.132,-1.25 -2.47,-2.188 -4.013,-2.813c-1.543,-0.625 -3.213,-0.937 -5.01,-0.937c-1.602,0 -3.076,0.186 -4.424,0.557c-1.348,0.371 -2.51,0.898 -3.486,1.582c-0.977,0.683 -1.738,1.484 -2.285,2.402c-0.547,0.918 -0.821,1.904 -0.821,2.959c0,1.133 0.196,2.051 0.586,2.754c0.391,0.703 0.811,1.348 1.26,1.933c0.449,0.586 0.869,1.182 1.26,1.788c0.39,0.605 0.586,1.377 0.586,2.314c0,1.641 -0.449,2.939 -1.348,3.897c-0.898,0.957 -1.992,1.435 -3.281,1.435c-0.899,0 -1.729,-0.205 -2.49,-0.615c-0.762,-0.41 -1.416,-0.986 -1.963,-1.729c-0.547,-0.742 -0.987,-1.631 -1.319,-2.666c-0.332,-1.035 -0.498,-2.158 -0.498,-3.369c0,-3.164 0.645,-5.849 1.934,-8.056c1.289,-2.208 2.939,-4.004 4.951,-5.391c2.012,-1.387 4.258,-2.402 6.738,-3.047c2.481,-0.645 4.912,-0.967 7.295,-0.967c3.164,0 6.084,0.42 8.76,1.26c2.676,0.84 4.98,2.051 6.914,3.633c1.934,1.582 3.447,3.515 4.541,5.801c1.094,2.285 1.641,4.853 1.641,7.705c0,2.812 -0.537,5.42 -1.612,7.822c-1.074,2.402 -2.421,4.707 -4.043,6.914c-1.621,2.207 -3.378,4.375 -5.273,6.504c-0.968,1.087 -3.323,3.663 -5.097,6.547c-1.7,2.762 -3.017,5.768 -3.354,7.047c-0.666,2.524 -1.001,5.166 -1.238,8.056c-1.006,1.546 -3.132,1.427 -3.934,0Z" />
      </g>
    </svg>
  )
}

export default diceCustom;
