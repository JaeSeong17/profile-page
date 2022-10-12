import Footer from "components/common/Footer";
import Responsive from "components/common/Responsive";
import Introline from "components/common/Introline";
import detail from "../static/data/detailData.json"
import AButton from "components/common/AButton";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollToTop from "components/common/ScrollToTop";

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
    margin: 4rem 0 4rem 0;
`;
const ImageContainer = styled.div`
    width: 100%;
    height: 18rem;
`;
const ImageBelt = styled.div`
    position: relative;
    display: flex;
    img{
        position: absolute;
        object-fit: cover;
        width: 30rem;
        height: 15rem;
        border-radius: 1rem;
        box-shadow: 0px 0px 40px rgba(0,0,10,0.25); 
    }
`;

const TextContainer = styled.div`
    display: block;
    padding: 2rem;
    ul {
        
        margin-bottom: 4rem;
    }
    li {
        margin: 0 0 1.5rem 1.5rem;
    }
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
        // 이미지 벨트 로테이션 세팅
        [...beltRef.current.children].map((img, i) => {
            gsap.set(img, {
                autoAlpha:1,
                scale:1,
                overflow: 'hidden'
            })
            img.tl = gsap.timeline({repeat:-1})
            .fromTo(img, {
                    x: 1500
                },{
                    x: -1500,
                    duration: 50,
                    ease: 'none'
            }).progress(i%beltRef.current.children.length/beltRef.current.children.length)
        })

        // 제목, 부제목 이미지 애니메이션
        const tl = gsap.timeline()
        tl.delay(3)
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
                        <ImageContainer>
                            <ImageBelt ref={beltRef}>
                                <img src={require("../" + detail[0].imagePath + "8.png")} alt={detail[0].title} />
                                <img src={require("../" + detail[0].imagePath + "9.png")} alt={detail[0].title} />
                                <img src={require("../" + detail[0].imagePath + "10.png")} alt={detail[0].title} />
                                <img src={require("../" + detail[0].imagePath + "11.png")} alt={detail[0].title} />
                                <img src={require("../" + detail[0].imagePath + "12.png")} alt={detail[0].title} />
                            </ImageBelt>
                        </ImageContainer>
                        <TextContainer ref={textRef}>
                            <ul>
                                {detail[0].detail.explain.map((text, i) => (
                                    <div><li key={i}><h4>{text}</h4></li></div>
                                ))}
                            </ul>
                            <ul>
                                <div><h3>Skill</h3></div>
                                {detail[0].detail.skill.map((text, i) => (
                                    <div><li key={i}>{text}</li></div>
                                ))}
                            </ul>
                            <ul>
                                <div><h3>Process</h3></div>
                                {detail[0].detail.process.map((text, i) => (
                                    <div><li key={i}>{text}</li></div>
                                ))}
                            </ul>
                            <ul>
                                <div><h3>Review</h3></div>
                                {detail[0].detail.review.map((text, i) => (
                                    <div><li key={i}>{text}</li></div>
                                ))}
                            </ul>
                        </TextContainer>
                    </DetailPanel>
                </Wrapper>
            </Responsive>
            <Footer />
            
        </>
    )
}

export default PetmilyPage;