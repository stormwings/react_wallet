import React from 'react';

const SvgUser = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M475.703 512H36.297C16.251 512 0 495.749 0 475.703V36.297C0 16.251 16.251 0 36.297 0h439.407C495.749 0 512 16.251 512 36.297v439.407C512 495.749 495.749 512 475.703 512z"
      fill="#d2e4ff"
    />
    <path
      d="M475.703 0H454v210.235C454 347.305 342.431 458 205.362 458H0v17.703C0 495.749 16.251 512 36.297 512h439.407C495.749 512 512 495.749 512 475.703V36.297C512 16.251 495.749 0 475.703 0z"
      fill="#b6d7ff"
    />
    <circle cx={255.65} cy={181.41} r={59.52} fill="#175be7" />
    <path
      d="M376.307 389H129.61c-4.403 0-7.61-3.428-7.61-7.831v-38.38C122 303.525 153.466 272 192.73 272h120.457C352.451 272 384 303.525 384 342.788v38.38c0 4.404-3.29 7.832-7.693 7.832z"
      fill="#6ca5ff"
    />
    <g fill="#175be7">
      <path d="M169 345h17v44h-17zM320 345h16v44h-16z" />
    </g>
  </svg>
);

export default SvgUser;