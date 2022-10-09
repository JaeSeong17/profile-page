import ContentPanel from "../contentPanel/ContentPanel";
import { useRef } from "react";
import data from '../../static/data/mainData.json'
import VideoContentPanel from "../contentPanel/VideoContentPanel";
import styled from "styled-components";

const Wrapper = styled.div`
    & > div {
        padding-top: 10rem;
        padding-bottom: 10rem;
        margin-bottom: 10rem;
    }
`;

const ContentsContainer = () => {
    return (
        <Wrapper>
            <ContentPanel data={data[0]} side="left" imgSlider  />
            <ContentPanel data={data[1]} side="right" imgBox />
            <ContentPanel data={data[2]} side="left" imgLotate />
            <ContentPanel data={data[3]} side="right" imgBox />
            <VideoContentPanel data={data[4]} />
            
            
        </Wrapper>
    );
};

export default ContentsContainer;