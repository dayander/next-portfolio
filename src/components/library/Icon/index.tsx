import React from 'react';

interface IconProps {
  src: string;
  alt: string;
  maxWidth?: string;
}

const Icon: React.FC<IconProps> = ({ src, alt, maxWidth }) => (
  <img alt={alt} src={src} style={{ maxWidth: maxWidth ?? '25px' }} />
);

export default Icon;
