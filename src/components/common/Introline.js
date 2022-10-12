import styled from "styled-components";
import gsap from "gsap";
import palette from "lib/styles/palette";
import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { useRef, useEffect } from "react";

const Wrapper = styled.svg`
.line {
    fill: none;
    stroke: ${palette.gray[8]};
    stroke-width: 1px;
}
`;

const Introline = () => {
    gsap.registerPlugin(DrawSVGPlugin,MotionPathPlugin);
    const lineRef = useRef();
    const circleRef = useRef();
    useEffect(() => {
        const tl = gsap.timeline();
        
        tl.from(lineRef.current, {
            drawSVG: 0,
            duration: 2
        }, 0)
        .to(circleRef.current, {
            motionPath: {
                path: lineRef.current,
                align: lineRef.current,
                alignOrigin: [0.5, 0.5] 
            },
            duration: 2
        }, 0);
    });

    return (
        <Wrapper  viewBox="0 0 500 48">
            <path ref={lineRef} className="line" d="M -50 30  100 30" />
            <circle ref={circleRef} r="4.5" fill={palette.red[7]} />
        </Wrapper>
    )
}

export default Introline;