import styled from 'styled-components';
import React from 'react';

const ResponsiveBlock = styled.div`
  width: 1024px;
  margin: 0 auto;

  @media (max-width > 1024px) {
    width: 768px;
    .responsive {
      display: flex;
    }
  }
  @media (max-width: 1024px) {
    width: 100%;
    justify-content: center;
    .responsive {
      display: block;
      justify-content: center;
      padding: 0rem;

      & > * {
        width: 100%;
      }
    }
    .imgArea {
      height: 24rem;
      padding: 1rem;
    }
    .imgSlider {
      position: absolute;
      height: 22rem;
      width: 34rem;
      left: 50%;
      transform: translate(-45%, 0);
    }
    .textArea {
      margin-bottom: 2.4rem;
      & > div {
        margin: 1.2rem 0 0 0;
      }
    }
    .detailTextArea {
      padding: 0 2rem 0 2rem;
    }
  }
`;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
