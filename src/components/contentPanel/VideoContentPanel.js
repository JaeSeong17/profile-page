import { useEffect, useRef } from "react";
import styled from "styled-components";
import TextBox from "../contentBox/TextBox";
import gsap from "gsap";
import Button from "../common/Button";

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 600px;
    width: 100%;
    /* margin-bottom: 8rem; */
    padding: 4rem;
`;

const VideoArea = styled.div`
    position: relative;
    width: 30rem; 
    height: 16rem;
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: 0px 0px 40px rgba(0,0,10,0.5); 
    & > img {
        position:absolute;
        width : 32rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const VideoContentPanel = ({data}) => {
    const imgRef = useRef();
    useEffect(() => {
        gsap.from(imgRef.current, {
            scrollTrigger:{
                trigger: imgRef.current,
                toggleActions: "restart none none reset"
            },
            opacity: 0,
            duration: 2
        })
    }, [imgRef]);


    return (
        <Wrapper>
            <VideoArea ref={imgRef}>
                <img async
                    src={require("../../" + data.mediaPath)}
                    alt={data.title}
                />
            </VideoArea>
            <TextBox data={data}/>
        </Wrapper>
    );
}

export default VideoContentPanel;