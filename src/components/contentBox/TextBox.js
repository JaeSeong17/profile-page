import styled from "styled-components";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const Wrapper = styled.div`
    display: block;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    height: 15rem;
    width: 25rem;

    div {
        margin-bottom: 1rem;
    }
`;

const Title = styled.div`
    font-size: 1.5rem;
`;

const TextBox = ({data}) => {
    const wrapRef = useRef();
    const wrapGsap = gsap.utils.selector(wrapRef);

    useEffect(() => { 
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: wrapRef.current,
                toggleActions: "restart none none none",
            }
        })
        tl.from(wrapGsap("div"), {
            opacity: 0,
            stagger: 0.3,
            duration: 0.5,
        })
    }, [])

    return (
        <Wrapper ref={wrapRef}>
            <Title>
                {data.title}    
            </Title>
            <div><hr /></div>
            {data.text.map((line, index) => (
                <div key={index}>- {line}</div>
            ))}
            
        </Wrapper>
    );
}

export default TextBox;