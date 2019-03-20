import React from 'react';
import gradientGenerator from '../util/gradient';

function GradPic({ height, width }) {
  return (
    <div style={{
      background: gradientGenerator.generateGradient(),
      borderRadius: '2px',
      height,
      width,
    }}
    />
  );
}

export default GradPic;
