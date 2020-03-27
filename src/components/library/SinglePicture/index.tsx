import React from 'react';
import styled from 'styled-components';

interface SinglePictureProps {
  image?: string;
  altText?: string;
}

const ImageContentWrapper = styled.div`
  position: relative;
  padding: 30px;
`;

const StyledImage = styled.img`
  display: block;
  margin: auto;
  max-width: 100%;
`;

const SinglePicture: React.FC<SinglePictureProps> = ({ image, altText }) => (
  <ImageContentWrapper>
    <StyledImage alt={altText} src={image} />
  </ImageContentWrapper>
);

export default SinglePicture;
