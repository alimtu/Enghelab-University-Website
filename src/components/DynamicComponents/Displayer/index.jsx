import React from 'react';
import APPImage from '../AppImage';
import APPText from '../AppText';

const AppDisplayer = ({
  src,
  width,
  height,
  alt = '',
  className = 'flex flex-col',
  responsive = false,
  text,
  as = 'p',
}) => {
  return (
    <>
      <div className={className}>
        <APPImage
          src={src}
          className={className}
          width={width}
          height={height}
          alt={alt}
          responsive={responsive}
        />
        <APPText text={text} as={as} />
      </div>
    </>
  );
};

export default AppDisplayer;
