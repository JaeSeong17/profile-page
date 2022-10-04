import styled, {css} from "styled-components";
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
        stroke-width: 0.05px;
    }
`;

// const TextContainer = styled.div`
//     position: relative;
//     display: flex;
//     min-height: 1000px;
//     width: 100%;
//     background-color: ${palette.gray[2]};
// `;

const TextBox = styled.div`
    position: absolute;
    ${(props) => css`
        top: ${props.top};
        left:  ${props.left};
    `}
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    /* background-color: ${palette.red[8]}; */
`;


const TitleBox = () => {

    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
    const circleRef = useRef();
    const pathRef = useRef();
    const svgRef = useRef();
    const wrapperRef = useRef();

    const textRef1 = useRef();
    const textRef2 = useRef();
    const textRef3 = useRef();
    const textRef4 = useRef();
    const textRef5 = useRef();
    const textRef = [textRef1, textRef2, textRef3, textRef4, textRef5];

    useEffect(() => {
        // 경로 이동 애니메이션
        gsap.to(circleRef.current, {
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: "0 0",
                end: "+=5000px",
                scrub: 1,
                id: "first",
                markers: true,
                pin: true,
                pinSpacing: true,
            },
            ease: "none",
            immediateRender: true,
            motionPath:{
              path: pathRef.current,
              align: pathRef.current,
              alignOrigin: [0.5, 0.5]
            }
        });  

     
        
    });



    return (
        <Wrapper ref={wrapperRef}>
            <SvgContainer ref={svgRef} viewBox="14 0 20 10">
                <path ref={pathRef} className="line" d="m 0.036 5.029
                C 32.5 6.25 17.5 -1.25 22.5 5 C 26.25
                10 27.5 3.75 23.75 1.25 C 20 0 32.5
                13.75 21.25 7.5 C 18.75 5 33.75 6.25
                26.25 3.75 C 20 2.5 15 2.5 26.25 8.75
                C 28.75 10 21.25 1.25 26.25 2.5 C 31.25
                5 36.25 5 49.979 4.999"/>

                <circle ref={circleRef} r="0.3" fill={palette.red[7]} />
            </SvgContainer>
            {/* <TextContainer> */}
            <TextBox ref={textRef1} top="25%" left="25%">어려운 순간은 매번 찾아옵니다</TextBox>
            <TextBox ref={textRef2} top="30%" left="25%">이 길이 맞나 헤메기도 합니다</TextBox>
            <TextBox ref={textRef3} top="80%" left="70%">하지만 될때까지 하다보면</TextBox>
            <TextBox ref={textRef4} top="85%" left="70%">또 다시 나아갈 수 있겠죠</TextBox>
            <TextBox ref={textRef5} top="75%" left="50%">기우제는 실패하지 않으니까요</TextBox>
            {/* </TextContainer> */}
        </Wrapper>
    )
}

export default TitleBox;