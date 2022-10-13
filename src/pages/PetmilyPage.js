import Footer from "components/common/Footer";
import Responsive from "components/common/Responsive";
import Introline from "components/common/Introline";
import detail from "../static/data/detailData.json"
import styled from "styled-components";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollToTop from "components/common/ScrollToTop";
import DetailTextBox from "components/contentBox/DetailTextBox";
import ImageLotateBelt from "components/contentBox/ImageLotateBelt";

const Wrapper = styled.div`
    h1 {
        font-size: 3rem;
    }
    h2 {
        font-size: 1.5rem;
    }
`;

const DetailPanel = styled.div`
    display: block;
    width: 100%;
`;

const PetmilyPage = () => {
    const splitTitle = "<div>" + detail[0].title.split("").join("</div><div>") + "</div>";
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
        
        
    },[])

    return (
        <>
            <ScrollToTop />
            <Introline />
            <Responsive>
                <Wrapper>
                    <h1 ref={titleRef} dangerouslySetInnerHTML={{__html: splitTitle}} style={{display: "flex"}} />
                    <div ref={subRef}>
                        <div><h2>{detail[0].subtitle}</h2></div>
                        <div><hr /></div>
                        <div><h4>{detail[0].summary}</h4></div>
                    </div>
                    <DetailPanel>
                        <ImageLotateBelt ref={beltRef} data={detail[0]} />
                        <DetailTextBox ref={textRef} data={detail[0]} />
                    </DetailPanel>
                </Wrapper>
            </Responsive>
            <Footer />
            
        </>
    )
}

export default PetmilyPage;