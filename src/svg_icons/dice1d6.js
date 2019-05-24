import React from 'react';

const dice1d6 = function ({ fillColor = "#FFF", lineColor = "#000" }) {
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
      <g id="_1d6" serifid="1d6">
        <path style={{ fill: fillColor }}
          d="M29.931,132.091c-2.281,-5.805 -16.261,-42.242 -17.642,-50.821c-1.388,-8.628 -3.764,-37.476 -3.966,-46.764c-0.258,-11.946 1.653,-20.452 14.997,-22.763c18.585,-3.219 46.08,-8.834 55,-10.629c7.057,-1.42 16.896,-3.375 25.748,7.595c4.403,5.456 17.336,23.539 25.342,35.022c7.156,10.264 7.088,14.031 5.22,28.061c-1.683,12.64 -4.079,26.222 -6.113,37.833c-2.437,13.912 -13.093,17.483 -17.742,18.64c-4.648,1.157 -40.791,10.169 -48.913,12.399c-15.449,4.243 -25.779,7.077 -31.931,-8.573Z" />
        <path style={{ fill: lineColor }}
          d="M29.931,132.091c-2.281,-5.805 -16.261,-42.242 -17.642,-50.821c-1.388,-8.628 -3.764,-37.476 -3.966,-46.764c-0.258,-11.946 1.653,-20.452 14.997,-22.763c18.585,-3.219 46.08,-8.834 55,-10.629c7.057,-1.42 16.896,-3.375 25.748,7.595c4.403,5.456 17.336,23.539 25.342,35.022c7.156,10.264 7.088,14.031 5.22,28.061c-1.683,12.64 -4.079,26.222 -6.113,37.833c-2.437,13.912 -13.093,17.483 -17.742,18.64c-4.648,1.157 -40.791,10.169 -48.913,12.399c-15.449,4.243 -25.779,7.077 -31.931,-8.573Zm82.773,-10.298c-7.556,1.942 -51.338,14.245 -62.528,16.1c-9.275,1.538 -11.085,-1.078 -11.387,-10.676c-0.385,-12.251 0.092,-25.156 0.163,-34.685c0.092,-12.378 7.229,-14.483 14.069,-16.198c10.159,-2.547 57.674,-13.059 68.792,-15.734c6.54,-1.573 8.868,2.945 7.736,9.615c-1.077,6.348 -3.735,24.619 -5.738,36.657c-1.191,7.157 -4.487,13.219 -11.107,14.921Zm-63.622,-0.551c2.422,-2.189 5.807,-1.782 7.868,0.498c2.06,2.279 0.144,6.534 -2.278,8.723c-2.421,2.189 -4.801,1.285 -6.861,-0.995c-2.061,-2.28 -1.15,-6.037 1.271,-8.226Zm-32.016,-44.641c-0.596,-5.932 -2.842,-26.676 -3.258,-35.234c-0.618,-12.724 0.046,-11.312 3.766,-3.179c2.788,6.095 14.793,34.528 16.149,41.229c1.587,7.84 1.914,32.107 2.081,42.678c0.13,8.263 0.509,14.152 -3.941,1.626c-1.333,-3.751 -9.765,-27.429 -11.406,-32.209c-1.454,-4.238 -2.868,-9.713 -3.391,-14.911Zm10.984,24.024c1.058,-2.321 3.026,-1.954 4.511,0.387c1.485,2.34 1.005,6.804 -0.053,9.125c-1.058,2.32 -2.528,1.418 -4.014,-0.922c-1.485,-2.34 -1.502,-6.27 -0.444,-8.59Zm54.05,-4.961c3.101,-1.02 6.067,0.832 7.069,3.881c1.001,3.048 -2.449,6.239 -5.55,7.258c-3.101,1.019 -4.941,-0.866 -5.943,-3.915c-1.002,-3.048 1.323,-6.205 4.424,-7.224Zm27.604,-22.309c2.422,-2.189 5.967,-1.606 8.218,0.885c2.251,2.491 0.451,6.874 -1.97,9.063c-2.422,2.188 -4.942,1.129 -7.193,-1.362c-2.251,-2.49 -1.476,-6.397 0.945,-8.586Zm-28.884,-67.518c-11.335,1.596 -38.848,7.18 -54.966,10.459c-9.602,1.953 -10.867,8.809 -7.84,15.796c3.362,7.76 10.173,23.526 14.912,32.504c4.967,9.408 10.464,9.464 20.474,7.404c14.501,-2.985 48.603,-9.843 64.484,-13.88c12.875,-3.272 9.303,-7.536 5.2,-13.657c-4.103,-6.121 -15.886,-22.191 -22.434,-32.445c-4.256,-6.665 -9.899,-7.579 -19.83,-6.181Zm-62.506,49.05c1.284,-1.483 3.376,-0.211 4.825,2.525c1.448,2.736 0.65,6.345 -0.633,7.828c-1.283,1.484 -2.807,-0.007 -4.256,-2.743c-1.448,-2.737 -1.219,-6.127 0.064,-7.61Zm34.278,-2.802c-2.421,-2.188 -5.966,-1.605 -8.217,0.885c-2.251,2.491 -0.451,6.874 1.97,9.063c2.422,2.189 4.942,1.129 7.193,-1.361c2.251,-2.491 1.476,-6.398 -0.946,-8.587Zm30.141,-3.991c-1.368,-2.964 -4.776,-3.857 -7.727,-2.494c-2.952,1.362 -2.958,6.073 -1.59,9.037c1.368,2.963 4.03,3.011 6.981,1.649c2.952,-1.363 3.704,-5.228 2.336,-8.192Zm19.642,-7.198c2.421,-2.189 5.806,-1.783 7.867,0.497c2.06,2.28 0.144,6.534 -2.277,8.723c-2.422,2.189 -4.801,1.285 -6.862,-0.994c-2.06,-2.28 -1.15,-6.037 1.272,-8.226Zm-63.818,-6.925c-2.422,2.189 -5.906,1.674 -8.083,-0.736c-2.178,-2.409 -0.333,-6.743 2.088,-8.932c2.422,-2.188 4.888,-1.189 7.066,1.22c2.177,2.41 1.35,6.259 -1.071,8.448Zm24.629,-15.505c-3.101,-1.019 -6.066,0.833 -7.068,3.881c-1.002,3.048 2.449,6.239 5.55,7.258c3.101,1.02 4.941,-0.866 5.943,-3.914c1.002,-3.049 -1.324,-6.206 -4.425,-7.225Zm26.607,-3.679c-2.422,-2.189 -5.807,-1.783 -7.868,0.497c-2.06,2.28 -0.144,6.535 2.277,8.723c2.422,2.189 4.801,1.285 6.862,-0.994c2.06,-2.28 1.15,-6.037 -1.271,-8.226Z" />
      </g>
    </svg >
  )
}

export default dice1d6;
