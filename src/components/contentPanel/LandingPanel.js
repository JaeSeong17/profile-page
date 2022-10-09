import styled from "styled-components";
import { useEffect, useRef} from "react";
import { gsap } from "gsap";

const Wrapper = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-width: 100%;
    background-color: white;
    z-index: 10;
`;
const TitleText = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    font-size: 3rem;
    /*  */
`;
const SubText = styled.div`
    position: absolute;
    display: flex;
    top: 50%;
    transform: translate(0, 3rem);
    font-size: 1rem;
`;
const DetailText = styled.div`
    position: absolute;
    display: inline-block;
    right: 20%;
    bottom: 14%;
    font-size: 0.6rem;
    text-align: end;
`;
const Screen = styled.div`
    position: absolute;
    display: flex;
    background-color: white;
    width: 100%;
    height: 9rem;
    top: 50%;
    transform: translate(0, 1.5rem);
`;

const LandingTextBox = () => {
    const title = '기우제는 실패하지 않는다';
    const splitTitle = "<div>" + title.split("").join("</div><div>&nbsp;</div><div>") + "</div>";
    const titleRef = useRef();
    const titleGsap = gsap.utils.selector(titleRef);

    const sub = '경북대학교 컴퓨터학부 안재성';
    const subRef = useRef();

    const mail = 'dktmzh6@gmail.com';
    const date = 'copyright dktmzh6 @2022 하반기';
    const detailRef = useRef();

    const wrapperRef = useRef();

    useEffect(() => {
        gsap.timeline()
        .from(titleGsap("div"), {
            y: 100,
            stagger: 0.02,
        })
        .from(subRef.current, {
            opacity: 0
        })
        .from(detailRef.current, {
            opacity: 0
        });

        setTimeout(() => {
            gsap.to(wrapperRef.current, {
                opacity: 0,
                duration: 1
            });
        }, 3000);
    }, [])

    return (
        <Wrapper ref={wrapperRef}>
            <TitleText ref={titleRef} dangerouslySetInnerHTML={{__html: splitTitle}}/>
            <Screen />
            <SubText ref={subRef}>{sub}</SubText>
            <DetailText ref={detailRef}>
                <div>{mail}</div><br />
                <div>{date}</div>
            </DetailText>
        </Wrapper>
        
    )
}

export default LandingTextBox;