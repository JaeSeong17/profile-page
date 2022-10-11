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
    height: 30vh;
    justify-content: space-evenly;
    margin: 4rem 0 4rem 0;
    
    ul{
        padding-left: 1rem;
        margin: auto;
    }
    li {
        font-weight: 1000;
        margin-bottom: 1.5rem;
        list-style: none;
    }
`;

const ImageContainer = styled.div`
    width: 50%;
    position: relative;
    img{
        width: 80%;
        height: auto;
        box-shadow: 0px 0px 40px rgba(0,0,10,0.25); 
        position: absolute;
        &:nth-child(1) {
            top: 5%;
            left: 20%;
        }
        &:nth-child(2) {
            top: 10%;
            left: 15%;
        }
        &:nth-child(3) {
            top: 15%;
            left: 10%;
        }
        &:nth-child(4) {
            top: 20%;
            left: 5%;
        }
        &:nth-child(5) {
            top: 25%;
            left: 0;
        }
    }

`;

const PetmilyPage = () => {
    const imgRef = useRef();
    const textRef = useRef();
    // 이미지 애니메이션
    useEffect(() => {
        [...imgRef.current.children].map(img => {
            gsap.set(img, {
                autoAlpha: 0
            })
        })
        const tl1 = gsap.timeline()
        tl1.delay(3);
        
        for (let i = 0; i< imgRef.current.children.length; i++){
            tl1.to(imgRef.current.children[i], {
                autoAlpha: 1,
                duration: 1
            })
            if (i< imgRef.current.children.length-1){
                tl1.to(imgRef.current.children[i], {
                    scale:0.8,
                    x: 50,
                    duration:1,
                    autoAlpha: 0.5,
                    delay: 1
                })
            } else {
                tl1.to(imgRef.current.children[i], {
                    scale:1,
                    duration:1,
                    autoAlpha: 1
                })
            }
            
        }
    },[])

    //텍스트 애니메이션
    const textGsap = gsap.utils.selector(textRef)
    useEffect(() => {
        const tl2 = gsap.timeline();
        tl2.delay(3);
        tl2.from(textGsap("li"), {
            autoAlpha: 0,
            stagger: 1,
            duration: 2
        })
    }, [])

    return (
        <>
            <Introline />
            <Responsive>
                <Wrapper>
                    <h1>{detail[0].title}</h1>
                    <h2>{detail[0].subtitle}</h2>
                    <hr />
                    <h4>{detail[0].summary}</h4>
                    <DetailPanel>
                        <ImageContainer ref={imgRef}>
                            <img src={require("../" + detail[0].imagePath + "8.png")} alt={detail[0].title} />
                            <img src={require("../" + detail[0].imagePath + "9.png")} alt={detail[0].title}/>
                            <img src={require("../" + detail[0].imagePath + "10.png")} alt={detail[0].title}/>
                            <img src={require("../" + detail[0].imagePath + "11.png")} alt={detail[0].title}/>
                            <img src={require("../" + detail[0].imagePath + "12.png")} alt={detail[0].title}/>
                        </ImageContainer>
                        <ul ref={textRef}>
                            {detail[0].detail[0].map((text, i) => (
                                <li key={i}>{text}</li>
                            ))}
                            <li><AButton text="To Git" path={detail[0].github} /></li>
                        </ul>
                    </DetailPanel>
                </Wrapper>
                
            </Responsive>
            
            <Footer />
        </>
    )
}

export default PetmilyPage;