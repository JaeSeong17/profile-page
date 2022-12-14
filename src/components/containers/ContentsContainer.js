import ContentPanel from "../contentPanel/ContentPanel";
import data from '../../static/data/mainData.json'
import styled from "styled-components";

const Wrapper = styled.div`
    & > div {
        padding-top: 2rem;
        padding-bottom: 6rem;
        margin-bottom: 15rem;
    }
`;

const ContentsContainer = () => {
    return (
        <Wrapper>
            <ContentPanel data={data[0]} side="left" imgSlider  />
            <ContentPanel data={data[1]} side="left" imgBox />
            <ContentPanel data={data[2]} side="left" imgShow />
            <ContentPanel data={data[3]} side="left" imgShow />
            <ContentPanel data={data[4]} side="left" imgBox />
        </Wrapper>
    );
};

export default ContentsContainer;