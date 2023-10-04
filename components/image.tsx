import React from 'react';

const Image = ({ alt, srcLight, srcDark, width, height }) => {
  return (
    <div className="relative w-full">
      <img
        alt={alt}
        src={srcLight}
        className="w-full h-auto"
        style={{ maxWidth: width, height }}
      />
    </div>
  );
};

export default Image;
