import styled from "styled-components";
import palette from "../../lib/styles/palette";
import gsap from "gsap";
import { ScrollTrigger} from "gsap/all";
import { useEffect, useRef } from "react";

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 600px;
    width: 100%;
    margin-bottom: 6rem;
    background-color: ${palette.gray[4]};
    padding: 4rem;
`;

const ImageArea = styled.div`
    background-color: ${palette.gray[7]};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20rem;
    width: 25rem;
`;
const TextArea = styled.div`
    background-color: ${palette.gray[5]};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15rem;
    width: 25rem;
`;

const ContentBox = ({value}) => {
    gsap.registerPlugin(ScrollTrigger);
    const imageRef = useRef();
    const textRef = useRef();

    useEffect(() => {
        gsap.from(imageRef.current,{
            scrollTrigger: {
                trigger: imageRef.current,
                toggleActions: "restart none none reset"
            },
            x: -100,
            duration: 1,
            opacity: 0
        });
    }, [])

    useEffect(() => { 
        gsap.from(textRef.current, {
            scrollTrigger: {
                trigger: textRef.current,
                toggleActions: "restart none none reset"
            },
            y: 100,
            duration: 1,
            opacity: 0
        });
    }, [])
    

    return (
        <Wrapper>
            <ImageArea ref={imageRef}>
                이미지 영역
            </ImageArea>
            <TextArea ref={textRef}>
                텍스트 영역 #{value}
            </TextArea> 
        </Wrapper>
    )
}

export default ContentBox;