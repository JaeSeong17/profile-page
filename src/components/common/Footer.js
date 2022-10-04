import styled from "styled-components";
import palette from "../../lib/styles/palette";

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 10rem;
    padding: 2rem;
    background-color: ${palette.gray[1]};

`;

const Footer = () => {
    return (
        <Wrapper> Footer Area </Wrapper>
    )
}

export default Footer;