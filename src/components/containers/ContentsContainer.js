import ContentBox from "../contentPanel/ContentPanel";
import { useRef } from "react";
import data from '../../static/data/mainData.json'
import VideoContentPanel from "../contentPanel/VideoContentPanel";

const ContentsContainer = () => {
    const wrapperRef = useRef();
    const contentRef = useRef();

    console.log(data[0], data[4]);
    return (
        <div ref={wrapperRef}>
            <div ref={contentRef}>
                <ContentBox data={data[0]} />
                <VideoContentPanel data={data[4]} />
            </div>
        </div>
    );
};

export default ContentsContainer;