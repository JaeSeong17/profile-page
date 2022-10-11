import palette from "lib/styles/palette";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100vw;
    height: 10vh;
    background-color: ${palette.red[8]};
    position: relative;
`;

const Volet = styled.div`
    height: 100%;
    width: 100vh;
    position: absolute;

`;

const Header = () => {
    return(
        <Wrapper>헤더</Wrapper>
    );
}

export default Header;