import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import palette from '../../lib/styles/palette';

const Wrapper = styled.div`
  overflow: hidden;
  justify-content: center;
  justify-items: center;
  /* background-color: ${palette.red[2]}; */
  width: 100%;
  height: 80%;
  /* max-height:880px; */
  /* background:#000; */
`;

const MainBoxes = styled.div`
  background-color: ${palette.red[4]};
  /* width: 500px;
    height: 100%; */
  div {
    position: absolute;
    box-shadow: 0px 0px 40px rgba(0, 0, 10, 0.25);
    /* background-color: ${palette.red[6]}; */
    opacity: 0;
    img {
      width: 100%;
      height: auto;
    }
  }
`;
const MainClose = styled.div``;

const ImageSlider = () => {
  const lanes = [
    [
      {
        title: 'image1',
        image: `${require('../../static/images/petmilys/petmily1.png')}`,
      },
      {
        title: 'image2',
        image: `${require('../../static/images/petmilys/petmily2.png')}`,
      },
      {
        title: 'image3',
        image: `${require('../../static/images/petmilys/petmily1.png')}`,
      },
      {
        title: 'image4',
        image: `${require('../../static/images/petmilys/petmily2.png')}`,
      },
    ],
    [
      {
        title: 'image5',
        image: `${require('../../static/images/petmilys/petmily3.png')}`,
      },
      {
        title: 'image6',
        image: `${require('../../static/images/petmilys/petmily4.png')}`,
      },
      {
        title: 'image7',
        image: `${require('../../static/images/petmilys/petmily3.png')}`,
      },
      {
        title: 'image8',
        image: `${require('../../static/images/petmilys/petmily4.png')}`,
      },
    ],
    [
      {
        title: 'image9',
        image: `${require('../../static/images/petmilys/petmily5.png')}`,
      },
      {
        title: 'image10',
        image: `${require('../../static/images/petmilys/petmily6.png')}`,
      },
      {
        title: 'image11',
        image: `${require('../../static/images/petmilys/petmily7.png')}`,
      },
      {
        title: 'image12',
        image: `${require('../../static/images/petmilys/petmily5.png')}`,
      },
    ],
  ];

  const mainBoxRef = useRef();
  const lanesRef = useRef([[], [], []]);
  const wrapperRef = useRef();
  const mainCloseRef = useRef();

  function pauseBoxes(b) {
    let classStr = 'pb-col0';
    if (b.classList.contains('pb-col1')) classStr = 'pb-col1';
    if (b.classList.contains('pb-col2')) classStr = 'pb-col2';
    for (let i = 0; i < mainBoxRef.current.children.length; i++) {
      let b = mainBoxRef.current.children[i];
      if (b.classList.contains(classStr)) {
        gsap.to(b.tl, { timeScale: 0, ease: 'sine' });
      }
    }
  }

  function playBoxes() {
    for (let i = 0; i < mainBoxRef.current.children.length; i++) {
      let tl = mainBoxRef.current.children[i].tl;
      tl.play();
      gsap.to(tl, {
        duration: 0.4,
        timeScale: 1,
        ease: 'sine.in',
        overwrite: true,
      });
    }
  }

  let currentImg = undefined,
    delayedPlay;

  useEffect(() => {
    lanesRef.current.map((lane, i) => {
      lane.map((img, j) => {
        gsap.set(img, {
          attr: { id: 'b' + (i * 4 + j), class: 'photoBox pb-col' + i },
          // backgroundImage: "url(src\static\images\petmilys\petmily1.png)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
          x: [20, 180, 340][i],
          width: 340,
          height: 640,
          borderRadius: 20,
          scale: 0.38,
          zIndex: 1,
        });

        img.tl = gsap
          .timeline({ paused: true, repeat: -1 })
          .fromTo(
            img,
            {
              y: [-575, 500, 500][i],
              rotation: -0.05,
            },
            {
              duration: [30, 42, 21][i],
              y: [500, -575, -575][i],
              rotation: 0.05,
              ease: 'none',
            },
          )
          .progress(((i * 4 + j) % 4) / 4); // 애니메이션 진행도를 설정할 수 있음
        return null;
      });
      return null;
    }, []);

    // 초기 애니메이션 세팅 - fade in
    gsap
      .timeline({
        onStart: playBoxes,
        scrollTrigger: {
          trigger: wrapperRef.current,
          // markers: true,
          toggleActions: 'play none none none',
        },
      })
      .set(wrapperRef.current, { perspective: 900 })
      .set(lanesRef.current, { opacity: 1, cursor: 'pointer' })
      .set(mainBoxRef.current, {
        left: '75%',
        xPercent: -5,
        width: 1200,
        rotationX: 14,
        rotationY: -15,
        rotationZ: 10,
      })
      .set(mainCloseRef.current, {
        autoAlpha: 0,
        width: 60,
        height: 60,
        left: -30,
        top: -31,
        pointerEvents: 'none',
      })
      .fromTo(
        wrapperRef.current,
        { autoAlpha: 0 },
        { duration: 2, ease: 'power2.inOut', autoAlpha: 1 },
        0.2,
      );

    lanesRef.current.map((lane) => {
      lane.map((img) => {
        img.addEventListener('mouseenter', function (e) {
          if (currentImg) return;
          if (delayedPlay) delayedPlay.kill();
          pauseBoxes(e.currentTarget);
          let _t = e.currentTarget;
          gsap.to(img, {
            duration: 0.2,
            overwrite: 'auto',
            opacity: function (i, t) {
              return t === _t ? 1 : 0.33;
            },
          });
          gsap.fromTo(
            _t,
            { zIndex: 100 },
            { duration: 0.2, scale: 0.44, overwrite: 'auto', ease: 'power3' },
          );
        });
        return null;
      });
      return null;
    });

    lanesRef.current.map((lane) => {
      lane.map((img) => {
        img.addEventListener('mouseleave', function (e) {
          if (currentImg) return;
          let _t = e.currentTarget;

          // if (gsap.getProperty(_t, 'scale')>0.62) delayedPlay = gsap.delayedCall(0.3, playBoxes); // to avoid jump, add delay when mouseout occurs as big image scales back down (not 100% reliable because the scale value sometimes evaluates too late)
          // else playBoxes();
          playBoxes();
          gsap
            .timeline()
            .set(_t, { zIndex: 1 })
            .to(
              _t,
              { duration: 0.3, scale: 0.38, overwrite: 'auto', ease: 'expo' },
              0,
            )
            .to(img, { duration: 0.5, opacity: 1, ease: 'power2.inOut' }, 0);
        });
        return null;
      });
      return null;
    });
  });

  return (
    <Wrapper ref={wrapperRef} className="imgSlider">
      <MainBoxes ref={mainBoxRef}>
        {lanes[0].map((img, i) => (
          <div key={i} ref={(el) => (lanesRef.current[0][i] = el)}>
            <img src={img.image} alt={img.title} />
          </div>
        ))}
        {lanes[1].map((img, i) => (
          <div key={i} ref={(el) => (lanesRef.current[1][i] = el)}>
            <img src={img.image} alt={img.title} />
          </div>
        ))}
        {lanes[2].map((img, i) => (
          <div key={i} ref={(el) => (lanesRef.current[2][i] = el)}>
            <img src={img.image} alt={img.title} />
          </div>
        ))}
      </MainBoxes>
      <MainClose ref={mainCloseRef}>
        <svg width="100%" height="100%" fill="none">
          <circle cx="30" cy="30" r="30" fill="#000" opacity="0.4" />
          <path
            d="M15,16L45,46 M45,16L15,46"
            stroke="#000"
            strokeWidth="3.5"
            opacity="0.5"
          />
          <path d="M15,15L45,45 M45,15L15,45" stroke="#fff" strokeWidth="2" />
        </svg>
      </MainClose>
    </Wrapper>
  );
};

export default ImageSlider;
