import styled from 'styled-components';
import { forwardRef, useEffect, useRef } from 'react';
import gsap from 'gsap';
import React from 'react';

const Wrapper = styled.div`
  width: 100%;
  height: 20rem;
  overflow: hidden;
`;
const ImageBelt = styled.div`
  position: relative;
  display: flex;
  img {
    position: absolute;
    object-fit: cover;
    width: 30rem;
    height: 15rem;
    border-radius: 1rem;
    box-shadow: 0px 0px 40px rgba(0, 0, 10, 0.25);
  }
`;

const ImageLotateBelt = forwardRef(({ data }, ref) => {
  const beltRef = useRef();

  useEffect(() => {
    [...beltRef.current.children].map((img, i) => {
      gsap.set(img, {
        autoAlpha: 1,
        scale: 1,
        overflow: 'hidden',
      });
      img.tl = gsap
        .timeline({ repeat: -1 })
        .fromTo(
          img,
          {
            x: -1300,
            y: 30,
          },
          {
            x: 1300,
            y: 30,
            duration: 50,
            ease: 'none',
          },
        )
        .progress(
          (i % beltRef.current.children.length) /
            beltRef.current.children.length,
        );
      return null;
    });
  }, []);

  return (
    <Wrapper ref={ref}>
      <ImageBelt ref={beltRef}>
        <img
          src={require('../../' + data.imagePath + '_ib1.png')}
          alt={data.title}
        />
        <img
          src={require('../../' + data.imagePath + '_ib2.png')}
          alt={data.title}
        />
        <img
          src={require('../../' + data.imagePath + '_ib3.png')}
          alt={data.title}
        />
        <img
          src={require('../../' + data.imagePath + '_ib4.png')}
          alt={data.title}
        />
        <img
          src={require('../../' + data.imagePath + '_ib5.png')}
          alt={data.title}
        />
      </ImageBelt>
    </Wrapper>
  );
});
ImageLotateBelt.displayName = 'ImageLotateBelt';

export default ImageLotateBelt;
