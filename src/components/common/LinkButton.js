import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from 'lib/styles/palette';
import React from 'react';

const Wrapper = styled(Link)`
  button {
    background-color: ${palette.red[6]};
    width: 4rem;
    height: 2rem;
    border-radius: 0.5rem;
    border: 0px;
    color: white;

    &:hover {
      background-color: ${palette.red[8]};
    }
  }
`;

const LinkButton = ({ text, path }) => {
  return (
    <Wrapper to={path}>
      <button>{text}</button>
    </Wrapper>
  );
};

export default LinkButton;
