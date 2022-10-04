import ContentBox from "../contentboxs/ContentBox";
import { useRef } from "react";


const ContentsContainer = () => {
    const contents = [{
        key:1,
        value: 'content1'
    },
    {
        key:2,
        value: 'content2'
    },
    {
        key:3,
        value: 'content3'
    },
    {
        key:4,
        value: 'content4'
    }];

    const wrapperRef = useRef();
    const contentRef = useRef();
   


    return (
        <div ref={wrapperRef}>
            <div ref={contentRef}>
                {contents.map(content => (
                    <ContentBox key={content.key} value={content.value} />
                ))}
            </div>
        </div>
    );
};

export default ContentsContainer;