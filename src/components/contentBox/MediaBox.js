import styled from "styled-components";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const Wrapper = styled.div`
    position: relative;
    width: 28rem; 
    height: 16rem;
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: 0px 0px 40px rgba(0,0,10,0.5); 
    video {
        position: absolute;
        width: 30rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const MediaBox = ({data}) => {
    const wrapRef = useRef();
    useEffect(() => {
        gsap.from(wrapRef.current, {
            scrollTrigger:{
                trigger: wrapRef.current,
                toggleActions: "restart none none reset"
            },
            opacity: 0,
            duration: 2
        })
    }, [wrapRef]);

    return (
        <Wrapper ref={wrapRef}>
            {data.mediaPath.slice(-3) === "mp4" &&
                <video async loop muted autoPlay
                    src={require("../../" + data.mediaPath)}
                    alt={data.title}
                />
            }
            {data.mediaPath.slice(-3) === "gif" &&
                <img async
                    src={require("../../" + data.mediaPath)}
                    alt={data.title}
                />
            }     
        </Wrapper>
    )
}

export default MediaBox;