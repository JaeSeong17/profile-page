import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const Wrapper = styled.a`
  button {
    background-color: ${palette.gray[6]};
    border-radius: 0.5rem;
    border: 0px;
    color: white;
    font-size: 1.2rem;
    padding: 0.5rem;

    &:hover {
      background-color: ${palette.gray[8]};
    }
  }
`;

const AButton = ({ text, path, report }) => {
  return (
    <>
      {report ? (
        <Wrapper href={require('../../' + path)}>
          <button>{text}</button>
        </Wrapper>
      ) : (
        <Wrapper href={path}>
          <button>{text}</button>
        </Wrapper>
      )}
    </>
  );
};

export default AButton;
