import styled from "styled-components";
import palette from "../../lib/styles/palette";

const Wrapper = styled.a`
    button {
        background-color: ${palette.gray[6]};
        width: 4rem;
        height: 2rem;
        border-radius: 0.5rem;
        border: 0px;
        color: white;

        &:hover {
        background-color: ${palette.gray[8]};
        }
    }
`;

const AButton = ({text, path}) => {
    return (
        <Wrapper href={path}>
            <button>
                {text}
            </button>
        </Wrapper>
    )
}

export default AButton;