import ContentBox from "../contentboxs/ContentBox";
import { useRef } from "react";


const ContentsContainer = () => {
    const contents = [{
        key:1,
        title: 'SJSU software educate program - Petmily',
        text: '반려동물 사료 후기 데이터에 기반한 기호 맞춤 사료 추천 서비스. Flutter 사용(개발 기간 짧음 고려), 어플리케이션 프론트 엔드 담당'
    },
    {
        key:2,
        title: 'title2',
        text: 'content2'
    },
    {
        key:3,
        title: 'title3',
        text: 'content3'
    },
    {
        key:4,
        title: 'title4',
        text: 'content4'
    }];

    const wrapperRef = useRef();
    const contentRef = useRef();
   


    return (
        <div ref={wrapperRef}>
            <div ref={contentRef}>
                {contents.map(content => (
                    <ContentBox key={content.key} content={content} />
                ))}
            </div>
        </div>
    );
};

export default ContentsContainer;