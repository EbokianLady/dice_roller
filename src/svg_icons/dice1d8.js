import React from 'react';

const dice1d8 = function ({ fillColor = "#FFF", lineColor = "#000" }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 144 144"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnslink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      xmlnsserif="http://www.serif.com/"
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        strokeLinejoin: 'round',
        strokeMiterLimit: '1.41421'
      }}>
      <g id="_1d8" serifid="1d8">
        <path style={{ fill: fillColor }}
          d="M106.637,133.838c1.721,-5.335 22.09,-65.153 25.273,-76.627c3.182,-11.474 3.949,-16.618 -10.284,-22.999c-15.47,-6.936 -58.867,-27.7 -66.341,-31.02c-8.015,-3.559 -16.271,-7.349 -21.5,7.883c-2.046,5.959 -18.302,59.202 -21.973,72.51c-3.351,12.145 -1.992,16.503 8.198,22.212c10.189,5.709 53.219,28.342 65.119,34.596c13.001,6.832 18.239,3.58 21.508,-6.555Z" />
        <path style={{ fill: lineColor }}
          d="M106.637,133.838c1.721,-5.335 22.09,-65.153 25.273,-76.627c3.182,-11.474 3.949,-16.618 -10.284,-22.999c-15.47,-6.936 -58.867,-27.7 -66.341,-31.02c-8.015,-3.559 -16.271,-7.349 -21.5,7.883c-2.046,5.959 -18.302,59.202 -21.973,72.51c-3.351,12.145 -1.992,16.503 8.198,22.212c10.189,5.709 53.219,28.342 65.119,34.596c13.001,6.832 18.239,3.58 21.508,-6.555Zm-61.868,-52.169c10.901,-5.242 60.579,-24.89 76.074,-31.724c5.544,-2.445 7.547,0.727 5.602,6.92c-3.821,12.166 -20.867,62.446 -23.603,72.596c-2.736,10.15 -6.792,9.995 -12.391,5.108c-12.399,-10.819 -40.697,-35.396 -48.082,-41.775c-4.3,-3.714 -3.389,-8.342 2.4,-11.125Zm33.926,50.023c9.423,5.085 15.015,9.186 0.041,-3.599c-9.614,-8.209 -36.606,-31.028 -39.796,-33.187c-2.79,-1.887 -3.603,-4.222 -10.233,-4.304c-3.551,-0.045 -6.077,1.804 -8.722,3.32c-3.032,1.739 -2.823,4.401 1.343,6.695c10.858,5.979 51.046,27.664 57.367,31.075Zm-44.647,-105.665c3.297,-10.188 4.504,-17.016 2.518,2.573c-1.276,12.577 -5.492,47.984 -7.127,51.472c-2.209,4.714 -5.882,8.555 -10.624,11.323c-3.019,1.761 -4.183,-1.004 -2.432,-6.575c3.716,-11.825 15.455,-51.96 17.665,-58.793Zm-1.223,56.674c1.583,-0.356 3.256,2.683 3.03,4.341c-0.28,2.057 -6.495,1.918 -6.089,-0.08c0.227,-1.12 1.523,-3.916 3.059,-4.261Zm19.638,-74.638c11.135,4.777 53.097,24.183 68.326,31.591c5.449,2.651 4.576,5.133 -1.407,7.651c-11.753,4.948 -64.22,26.133 -73.734,30.606c-9.513,4.472 -11.473,1.763 -10.722,-5.911c1.602,-16.377 4.688,-49.991 5.832,-59.255c0.893,-7.229 4.829,-7.631 11.705,-4.682Z" />
      </g>
    </svg >
  )
}

export default dice1d8;
