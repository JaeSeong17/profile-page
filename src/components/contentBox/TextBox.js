import styled from "styled-components";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import LinkButton from "../common/LinkButton";

const Wrapper = styled.div`
    display: block;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    div {
        margin-bottom: 1rem;
    }
`;

const TextBox = ({data}) => {
    const wrapRef = useRef();
    const wrapGsap = gsap.utils.selector(wrapRef);

    useEffect(() => { 
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: wrapRef.current,
                toggleActions: "play none none none",
            }
        })
        tl.from(wrapGsap("div"), {
            opacity: 0,
            stagger: 0.3,
            duration: 0.5,
        })
    }, [wrapGsap])

    return (
        <Wrapper ref={wrapRef}>
            <div><h3>{data.title}</h3></div>
            <div><hr /></div>
            {data.text.map((line, index) => (
                <div key={index}>- {line}</div>
            ))}
            <div><LinkButton text="Detail" path={data.key}/></div>
        </Wrapper>
    );
}

export default TextBox;