import Footer from "components/common/Footer";
import Responsive from "components/common/Responsive";
import Introline from "components/common/Introline";
import detail from "../static/data/detailData.json"
import AButton from "components/common/AButton";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Wrapper = styled.div`
    h1 {
        font-size: 3rem;
    }
    h2 {
        font-size: 1.5rem;
    }
`;

const DetailPanel = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin: 4rem 0 4rem 0;

`;

const ImageContainer = styled.div`
    width: 60%;
    position: relative;
    img{
        width: 80%;
        height: auto;
        box-shadow: 0px 0px 40px rgba(0,0,10,0.25); 
        position: absolute;
        &:nth-child(1) {
            top: 0%;
            left: 15%;
        }
        &:nth-child(2) {
            top: 20%;
            left: 12%;
        }
        &:nth-child(3) {
            top: 40%;
            left: 9%;
        }
        &:nth-child(4) {
            top: 60%;
            left: 6%;
        }
        &:nth-child(5) {
            top: 80%;
            left: 3%;
        }
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
    const imgRef = useRef();
    const textRef = useRef();

    const splitTitle = "<div>" + detail[0].title.split("").join("</div><div>") + "</div>";
    const titleRef = useRef();
    const titleGsap = gsap.utils.selector(titleRef);
    const subRef = useRef();
    const subGsap = gsap.utils.selector(subRef);
    // 이미지 애니메이션
    useEffect(() => {
        [...imgRef.current.children].map(img => {
            gsap.set(img, {
                autoAlpha: 0
            })
        })
        const tl1 = gsap.timeline()
        tl1.delay(3)
        .from(titleGsap("div"), {
            y: 50,
            autoAlpha:0,
            stagger: 0.1,
        })
        .from(subGsap("div"), {
            autoAlpha: 0,
            stagger: 0.1,
        })
        
        for (let i = 0; i< imgRef.current.children.length; i++){
            tl1.to(imgRef.current.children[i], {
                scale:1.2,
                autoAlpha: 1,
                duration: 0.5
            })
            if (i< imgRef.current.children.length-1){
                tl1.to(imgRef.current.children[i], {
                    scale:1,
                    x: 50,
                    duration:0.5,
                    delay: 0.5
                })
            } else {
                tl1.to(imgRef.current.children[i], {
                    scale:1,
                    duration:0.5,
                    autoAlpha: 1,
                    delay: 0.5
                })
            }
            
        }
    },[])

    //텍스트 애니메이션
    const textGsap = gsap.utils.selector(textRef)
    useEffect(() => {
        const tl2 = gsap.timeline();
        tl2.delay(5);
        tl2.from(textGsap("li"), {
            autoAlpha: 0,
            stagger: 0.5,
            duration: 2
        })
    }, [])

    return (
        <>
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
                        <ImageContainer ref={imgRef}>
                            <img src={require("../" + detail[0].imagePath + "8.png")} alt={detail[0].title} />
                            <img src={require("../" + detail[0].imagePath + "9.png")} alt={detail[0].title} />
                            <img src={require("../" + detail[0].imagePath + "10.png")} alt={detail[0].title} />
                            <img src={require("../" + detail[0].imagePath + "11.png")} alt={detail[0].title} />
                            <img src={require("../" + detail[0].imagePath + "12.png")} alt={detail[0].title} />
                        </ImageContainer>
                        <TextContainer ref={textRef}>
                            <ul>
                                {detail[0].detail.explain.map((text, i) => (
                                    <li key={i}><h4>{text}</h4></li>
                                ))}
                            </ul>
                            <ul>
                                <li><h4>Skill</h4></li>
                                {detail[0].detail.skill.map((text, i) => (
                                    <li key={i}>{text}</li>
                                ))}
                            </ul>
                            <ul>
                                <li><h4>Process</h4></li>
                                {detail[0].detail.process.map((text, i) => (
                                    <li key={i}>{text}</li>
                                ))}
                            </ul>
                            <ul>
                                <li><h4>Review</h4></li>
                                {detail[0].detail.review.map((text, i) => (
                                    <li key={i}>{text}</li>
                                ))}
                            </ul>
                            <ul>
                                <li><AButton text="Github Link" path={detail[0].github}></AButton></li>
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