import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import React from 'react';

const Wrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  height: 10rem;
  padding: 1rem;
  background-color: ${palette.gray[1]};

  ul {
    list-style: none;
    justify-content: end;
    li {
      display: flex;
      justify-content: end;
      margin-bottom: 0.5rem;
      font-size: 0.8rem;
    }
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <ul>
        <li>dktmzh6@gmail.com</li>
        <li>copyright dktmzh6</li>
        <li>2022 하반기 지원 포트폴리오</li>
        <li>
          Github link :{' '}
          <a href="https://github.com/JaeSeong17/profile-page">
            github.com/JaeSeong17/profile-page
          </a>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Footer;
