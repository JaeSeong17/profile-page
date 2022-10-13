import styled from "styled-components";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ImageLotateBelt from "components/contentBox/ImageLotateBelt";
import DetailTextBox from "components/contentBox/DetailTextBox";

const Wrapper = styled.div`    
    ul{
        padding-left: 1rem;
        margin: auto;
    }
    li {
        margin-bottom: 1.5rem;
    }
`;

const ContentArea = styled.div`
    display: block;
    width: 100%;
`;

const DetailPanel = ({data}) => {
    const splitTitle = "<div>" + data.title.split("").join("</div><div>") + "</div>";
    const titleRef = useRef();
    const titleGsap = gsap.utils.selector(titleRef);
    const subRef = useRef();
    const subGsap = gsap.utils.selector(subRef);

    const beltRef = useRef();
    const textRef = useRef();
    const textGsap = gsap.utils.selector(textRef);

    useEffect(() => {
        // 제목, 부제목 이미지 애니메이션
        const tl = gsap.timeline()
        tl.delay(2.5)
        .from(titleGsap("div"), {
            y: 50,
            autoAlpha:0,
            stagger: 0.1,
        })
        .from(subGsap("div"), {
            autoAlpha: 0,
            stagger: 0.1,
        })
        // 이미지 애니메이션
        .from(beltRef.current, {
            autoAlpha: 0,
            duration: 1
        })
        // 텍스트 애니메이션
        .from(textGsap("div"), {
            autoAlpha: 0,
            stagger: 0.2,
            duration: 1
        });
        
        
    },[titleGsap, beltRef, subGsap, textGsap])

    return (
        <Wrapper>
            <h1 ref={titleRef} dangerouslySetInnerHTML={{__html: splitTitle}} style={{display: "flex"}} />
            <div ref={subRef}>
                <div><h2>{data.subtitle}</h2></div>
                <div><hr /></div>
                <div><h4>{data.summary}</h4></div>
            </div>
            <ContentArea>
                <ImageLotateBelt ref={beltRef} data={data} />
                <DetailTextBox ref={textRef} data={data} />
            </ContentArea>
        </Wrapper>
    )
}

export default DetailPanel;