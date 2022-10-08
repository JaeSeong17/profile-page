import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger} from "gsap/all";
import ImageSlider from "../contentBox/ImageSlider";
import TextBox from "../contentBox/TextBox";

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 600px;
    width: 100%;
    margin-bottom: 8rem;
    padding: 4rem;
`;

const ImageArea = styled.div`
    height: 30rem;
    width: 32rem;
`;

const ContentBox = ({data}) => {
    gsap.registerPlugin(ScrollTrigger);
    return (
        <Wrapper>
            <ImageArea>
                <ImageSlider />
            </ImageArea>
            <TextBox data={data} gitBtn/>
        </Wrapper>
    )
}

export default ContentBox;