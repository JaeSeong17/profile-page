import styled from 'styled-components';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  img {
    position: absolute;
    margin: 0;
    padding: 0;
    width: 80%;
    height: 14rem;
    object-fit: cover;
    border-radius: 1rem;
    box-shadow: 0px 0px 40px rgba(0, 0, 10, 0.25);
    &:nth-child(1) {
      top: 10%;
    }
    &:nth-child(2) {
      bottom: 10%;
      right: 0;
    }
  }
`;

const ImageShow = ({ data }) => {
  const wrapRef = useRef();
  const wrapGsap = gsap.utils.selector(wrapRef);
  useEffect(() => {
    gsap.from(wrapGsap('img'), {
      scrollTrigger: {
        trigger: wrapRef.current,
        toggleActions: 'play none none none',
      },
      autoAlpha: 0,
      duration: 0.5,
      stagger: 1,
    });
  });

  return (
    <Wrapper ref={wrapRef}>
      <img
        src={require('../../' + data.imgPath + data.key + '1.png')}
        alt={data.title}
      />
      <img
        src={require('../../' + data.imgPath + data.key + '2.png')}
        alt={data.title}
      />
    </Wrapper>
  );
};

export default ImageShow;
