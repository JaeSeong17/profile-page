import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';
import React from 'react';

const Wrapper = styled.div`
  position: relative;
  display: block;
  padding: 2rem;
  justify-content: space-evenly;
  align-items: center;
  min-height: 80vh;
  margin-top: 4rem;
  margin-bottom: 4rem;
  /* background-color: ${palette.gray[1]}; */
`;

const TextList = styled.div`
  & > * {
    margin: 1.5rem;
    line-height: 200%;
  }
`;
const DetailTextWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  & > * {
    width: 50%;
  }
`;

const ProfileContainer = () => {
  // TO-DO : Json으로 뽑아내자

  const introduce = [
    {
      title: '프론트 엔드의 매력',
      contents:
        "개발의 즐거움은 사용자에 있다고 생각합니다. 자신이 만든 창작물을 사용하는 사람이 있다는 것은 큰 기쁨입니다.\
        대외 활동에서 진행한 프로젝트 '반려동물 사료 어플'에서 프론트엔드를 담당했는데 화면을 하나하나 만들어가는 과정이\
        여태 경험했던 프로젝트 중 가장 가슴뛰는 순간이었던 것 같습니다. 이는 프론트 엔드 직무를 희망하는 계기가 되었습니다.",
    },
    {
      title: '새로운 것을 배우고 자신의 것으로 만드는 즐거움',
      contents:
        'html, css, javascript로 개발한 페이지에서 SPA를 위한 React를, \
      애니메이션을 위한 react-spring, gsap, 3D 화면을 위한 Three.js 까지 \
      여러 기술을 배우고 적용하면서 발전하는 표현력에 즐거움을 느꼈습니다. \
      또한 Redux를 활용하여 한 곳에서 상태 관리하고, Typescript를 활용하여 \
      코드 수정과 확장 시 파라미터와 각 타입 확인을 용이하게 하는 등 \
      발전하는 코드와 결과물을 보며 개발하는데 즐거움을 느낄수 있었습니다.',
    },
    {
      title: '원리와 근본적인 이해에 대한 욕심',
      contents:
        '프론트 엔드 페이지에서 백엔드 서버와 연결을 시도하던중 CORS 문제가 발생했습니다.\
      많은 글에서 서버측 코드에 CORS 제한을 허용하는 코드를 추가하면 된다고 했습니다.\
      단순히 코드 한 줄을 추가하는 작업에 그치지 않고 CORS 문제는 무엇때문에 발생하는지,\
      해결하는 코드가 작동하는 원리는 무엇인지 이해하려고 했습니다.\
      그렇게 했을때 진정으로 문제를 해결해낸 기분과 함께 성장한다는 기쁨을 느낄 수 있었습니다.',
    },
  ];
  const techs = [
    'HTML, CSS, JavaScript',
    'React, Redux/toolkit, Redux-Saga',
    'Typescript',
    'Three.js, React-three-fiber/drei, GSAP',
  ];
  const subs = ['nodejs, express, koa, mongodb', 'python', 'flutter'];

  gsap.registerPlugin(ScrollTrigger);
  const nameRef = useRef();
  const subListRef = useRef();
  const skillListRef = useRef();

  const nameGsap = gsap.utils.selector(nameRef);
  const subListGsap = gsap.utils.selector(subListRef);
  const skillListGsap = gsap.utils.selector(skillListRef);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: nameRef.current,
        toggleActions: 'play none none none',
      },
    });

    tl.from(nameGsap('div'), {
      opacity: 0,
      stagger: 0.1,
    })
      .from(skillListGsap('div'), {
        y: 100,
        opacity: 0,
        stagger: 0.05,
      })
      .from(subListGsap('div'), {
        y: 100,
        opacity: 0,
        stagger: 0.05,
      });
  }, [nameGsap, skillListGsap, subListGsap]);

  return (
    <Wrapper>
      <TextList ref={nameRef} className="textArea">
        <div>
          <h1>안재성</h1>
        </div>
        <div>
          <h2>프론트 엔드 개발자 지망</h2>
        </div>
        <div>
          <hr />
        </div>
        {introduce.map((pg, idx) => (
          <div key={idx}>
            <h3>{pg.title}</h3>
            <div>{pg.contents}</div>
          </div>
        ))}
      </TextList>
      <DetailTextWrapper className="responsive">
        <TextList ref={skillListRef} className="textArea">
          <div>
            <h3>주요 기술 스택</h3>
          </div>
          {techs.map((tech) => (
            <div key={tech}>{tech}</div>
          ))}
        </TextList>
        <TextList ref={subListRef} className="textArea">
          <div>
            <h3>서브 기술 스택</h3>
          </div>
          {subs.map((sub) => (
            <div key={sub}>{sub}</div>
          ))}
        </TextList>
      </DetailTextWrapper>
    </Wrapper>
  );
};

export default ProfileContainer;
