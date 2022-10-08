import ContentBox from "../contentPanel/ContentPanel";
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
            <ContentBox data={data[0]} />
            <VideoContentPanel data={data[4]} />
        </Wrapper>
    );
};

export default ContentsContainer;