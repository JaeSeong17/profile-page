import styled from "styled-components";
import palette from "../../lib/styles/palette";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";


const Wrapper = styled.div`
    position: relative;
    display: block;
    padding: 2rem;
    justify-content: space-evenly;
    align-items: center;
    min-height: 80vh;
    margin-top: 10rem;
    margin-bottom: 10rem;
    /* background-color: ${palette.gray[1]}; */
`;

const TextList = styled.div`
    .name {
        font-size: 3rem;
    }
    .field {
        font-size: 2rem;
    }
    .sub {
        font-size: 1.5rem;
    }
    & > * {
        margin: 2rem;
    }
`;
const DetailTextWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    & > * {
        width: 50%;
    }
    
`;

const ProfileContainer = () => {
    // TO-DO : Json으로 뽑아내자
    const expers = [
        '교내 프로젝트 - PHM, Offline_Chat',
        '인도 인턴쉽 - WebOS',
        'SJSU educate program - Petmily',
        '교내 수업 보조 (C, Python, R)',
        '모던 자바스크립트, 리액트를 다루는 기술',
    ];
    const techs = [
        'HTML, CSS, JavaScript (인도 인턴쉽, 교내 프로젝트)',
        'React (교내, Toy 프로젝트)',
        'Python (PHM 프로젝트)',
        'C, C++ (Unity Toy, PHM 프로젝트)',
        'Java (교내 프로젝트)',
        'Flutter (대외 프로젝트)'
    ];

    gsap.registerPlugin(ScrollTrigger);
    const nameRef = useRef();
    const leftListRef = useRef();
    const rightListRef = useRef();

    const nameGsap = gsap.utils.selector(nameRef);
    const leftListGsap = gsap.utils.selector(leftListRef);
    const rightListGsap = gsap.utils.selector(rightListRef);
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: nameRef.current,
                toggleActions: "restart none none reset",
            }
        })

        tl.from(nameGsap("div"), {
            opacity: 0,
            stagger: 0.3,
        })
        .from(leftListGsap("div"), {
            y: 100,
            opacity: 0,
            stagger: 0.1,
        })
        .from(rightListGsap("div"), {
            y: 100,
            opacity: 0,
            stagger: 0.1,
        });
    }, [])



    return (
        <Wrapper>
            <TextList ref={nameRef}>
                <div className="name">안재성</div>
                <div className="field">프론트 엔드 개발자 지망</div>
                <div><hr /></div>
                <div>컴퓨터 학부를 졸업했지만 막상 할줄 아는게 없는것 같은 걱정에</div>
                <div>뭐라도 해보자는 취지에서 만드는 페이지</div>
            </TextList>
            <DetailTextWrapper>
                <TextList ref={leftListRef}>
                    <div className="sub">나의 경험들</div>
                    {expers.map(exper => (
                        <div key={exper}>{exper}</div>
                    ))}
                </TextList>
                <TextList ref={rightListRef}>
                    <div className="sub">사용해본 언어</div>
                    {techs.map(tech => (
                        <div key={tech}>{tech}</div>
                    ))}
                </TextList>
            </DetailTextWrapper>
           
        </Wrapper>
    );
};

export default ProfileContainer;