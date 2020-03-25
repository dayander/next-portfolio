import React from 'react';
import styled from 'styled-components';

const StyledSkipContentLink = styled.a`
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);

  &:hover,
  &:focus,
  &:active {
    top: 5px;
    left: 5px;
    z-index: 100000;
    clip: auto !important;
    display: block;
    width: auto;
    height: auto;
    padding: 15px 23px 14px;
    font-weight: bold;
    font-size: 14px;
    text-decoration: none;
    line-height: normal;
    color: #21759b;
    background-color: #f1f1f1;
    border-radius: 3px;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
  }
`;

const SkipContentLink: React.FC = () => (
  <StyledSkipContentLink href="#main">Skip To Main Content</StyledSkipContentLink>
);

export default SkipContentLink;
