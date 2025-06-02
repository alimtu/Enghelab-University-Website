import Image from 'next/image';

const APPImage = ({ src, width, height, alt = '', className = '', responsive = false }) => {
  const numericWidth = width ? parseInt(width) : '100%';
  const numericHeight = height ? parseInt(height) : '100%';

  const style = responsive
    ? { width: '100%', height: 'auto' }
    : { width: width || 'auto', height: height || 'auto' };

  return (
    <div
      className={`relative ${responsive ? 'w-full' : ''}`}
      style={!responsive ? { width: width || 'auto' } : {}}
    >
      <Image
        src={src}
        alt={alt}
        width={responsive ? 0 : numericWidth}
        height={responsive ? 0 : numericHeight}
        style={style}
        className={`object-cover ${className}`}
      />
    </div>
  );
};

export default APPImage;
