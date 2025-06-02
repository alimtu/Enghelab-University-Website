import React from 'react';

const APPText = ({ text, as = 'p', className = '' }) => {
  const Tag = as;

  const combinedClassName = `
    ${className}
  `;

  return <Tag className={combinedClassName.trim()}>{text}</Tag>;
};

export default APPText;
