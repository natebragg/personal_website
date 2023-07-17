import React from 'react';
import ReactDOM from 'react-dom/client';
import AnimatedScroll from './AnimatedScroll';

const sitenav = ReactDOM.createRoot(document.getElementById('sitenav'));
sitenav.render(
  <React.StrictMode>
    <AnimatedScroll />
  </React.StrictMode>
);
