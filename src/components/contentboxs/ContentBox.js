import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger} from "gsap/all";
import { useEffect, useRef } from "react";
import ImageSlider from "./ImageSlider";

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 600px;
    width: 100%;
    margin-bottom: 6rem;
    padding: 4rem;
`;

const ImageArea = styled.div`
    height: 30rem;
    width: 32rem;
`;
const TextArea = styled.div`
    display: block;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    height: 15rem;
    width: 25rem;
`;

const ContentBox = ({content}) => {
    gsap.registerPlugin(ScrollTrigger);
    const imageRef = useRef();
    const textRef = useRef();

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
            <ImageArea>
                <ImageSlider />
            </ImageArea>
            <TextArea ref={textRef}>
                <div>
                    {content.title}
                </div>
                <hr />
                <div>
                    {content.text}
                </div>
            </TextArea> 
        </Wrapper>
    )
}

export default ContentBox;