import styled from "styled-components";
import palette from "../../lib/styles/palette";
import gsap from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";
import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import React, { useEffect, useRef } from "react";

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin-bottom: 500px;
    /* background-color: ${palette.gray[3]}; */
`;

const SvgContainer = styled.svg`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    overflow: visible;
    .line {
        fill: none;
        stroke: black;
        stroke-width: 0.02px;
    }

    .text{
        font-size: 0.03rem;
    }
`;


const TitleBox = () => {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);    // 플러그인 사용시 등록
    gsap.defaults({ease: "none"});
    const circleRef = useRef();
    const pathRef = useRef();
    const svgRef = useRef();
    const wrapperRef = useRef();
    const textRef1 = useRef();
    const textRef2 = useRef();
    const textRef3 = useRef();
    const textRef4 = useRef();
    const textRef5 = useRef();


    // react 에서 gsap 애니메이션 사용시 useEffect로 랜더링 시점에 애니메이션 호출 해주어야 적상 작동됨
    // DOM elem 에 접근은 useRef으로 가능
    useEffect(() => {
        // 텍스트 애니메이션
        const pulses = gsap.timeline({
            // 전체 텍스트에 동일하게 줄 속성 설정
            defaults: {
                duration: 0.1, 
                opacity: 0,
                repeat: 1,  // yoyo 설정시 기본 1을 주어야함
                yoyo: true  // 반복시 왔다 갔다 옵션으로 주기
            }})
        .from(textRef1.current, {}, 0.1)    // 스크롤 애니메이션 진행률에 따른 애니메이션 트리거 설정
        .from(textRef2.current, {}, 0.3)
        .from(textRef3.current, {}, 0.5)
        .from(textRef4.current, {}, 0.7)
        .from(textRef5.current, {}, 0.9)


        // 경로 이동 애니메이션
        gsap.timeline({defaults: {duration: 1},
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: "0 0",           // 처음 트리거 발생 지점 설정, (컴포넌트 기준점, 스크롤 기준점)
                end: "+=8000px",        // 애니메이션 종료 지점 컴포넌트, 기준점에서 간격 더해줌
                scrub: 1,
                // id: "first",
                // markers: true,
                pin: true,              // 애니메이션 발생시 화면에 컴포넌트 고정
                pinSpacing: true,       // 스크롤 진행 방향으로 고정 여백을 줄 것인지 설정, 미설정시 아래 컴포넌트 위로 지나감
        }})
        .to(circleRef.current, {
            // ease: "none",
            immediateRender: true,      // 이전 애니메이션이 완료되지 않아도 다음 애니메이션 바로 렌더링
            motionPath:{                // SVG path 따라 경로 이동
              path: pathRef.current,
              align: pathRef.current,
              alignOrigin: [0.5, 0.5]   
            }
        }).add(pulses, 0);
    });

    // SVG path는 웹 툴로 그릴수 있음
    // SVG 관련 애니메이션 처리는 SVG 내부에서 모두 처리하는게 간편 (path, text, circle, rect ...)
    // - 외부 애니메이션과 상호작용시 트리거 꼬이는듯 (전역 트리거인것 같은데 정확한 이유는 확인 필요)
    return (
        <Wrapper ref={wrapperRef}>
            <SvgContainer ref={svgRef} viewBox="14 0 20 10">
                <text ref={textRef1} className='text' x="15" y="1.5">어려운 순간은 매번 찾아옵니다</text>
                <text ref={textRef2} className='text' x="15" y="2.5">이 길이 맞나 헤메기도 합니다</text>
                <text ref={textRef3} className='text' x="28" y="7.5">하지만 될때까지 하다보면</text>
                <text ref={textRef4} className='text' x="28" y="8.5">또 다시 나아갈 수 있겠죠</text>
                <text ref={textRef5} className='text' x="21.5" y="10">기우제는 실패하지 않으니까요</text>
                <path 
                    ref={pathRef}
                    className='line'
                    d="m 0.036 5.029
                    C 32.5 6.25 17.5 -1.25 22.5 5 C 26.25
                    10 27.5 3.75 23.75 1.25 C 20 0 32.5
                    13.75 21.25 7.5 C 18.75 5 33.75 6.25
                    26.25 3.75 C 20 2.5 15 2.5 26.25 8.75
                    C 28.75 10 21.25 1.25 26.25 2.5 C 31.25
                    5 36.25 5 49.979 4.999"/>
                <circle ref={circleRef} r="0.3" fill={palette.red[7]} />
            </SvgContainer>
        </Wrapper>
    )
}

export default TitleBox;