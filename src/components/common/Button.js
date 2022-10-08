import { useEffect, useRef } from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Wrapper = styled.a`
    button {
        background-color: ${palette.red[6]};
        width: 4rem;
        height: 2rem;
        border-radius: 0.5rem;
        border: 0px;
        color: white;

        &:hover {
        background-color: ${palette.red[8]};
        }
    }
`;

const Button = ({text, path}) => {
    const wrapRef = useRef();
    useEffect(() => {
        gsap.from(wrapRef.current, {
            scrollTrigger:{
                trigger: wrapRef.current,
                toggleActions: "restart none none reset"
            },
            autoAlpha: 0,
            duration: 2
        })
    })

    return (
        <Wrapper ref={wrapRef} href={path}>
            <button>
                {text}
            </button>
        </Wrapper>
    )
}

export default Button;