import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";

const Wrapper = styled.div`
    height: 16rem;
    width: 28rem;
    justify-content: center;
    align-items: center;
    display: flex;
    /* overflow: hidden; */
    ul{
        margin: 0;
        padding: 0;
        position: absolute;
        overflow: hidden;
        height: 16rem;
        width: 28rem;
        list-style: none;
        display: flex;
        background-color: black;
        border-radius: 1rem;
        box-shadow: 0px 0px 40px rgba(0,0,10,0.5); 

        li {
            height: 16rem;
            width: 28rem;
            img {
                height: 16rem;
                width: 28rem;
                object-fit: contain;
            }
        }
    }
`;

const ImageLotate = ({data}) => {
    const imgList = useRef(null);
    let n = 0
    const [index, setIndex] = useState(0)
    

    useEffect(() => {
        gsap.to({}, {
            duration: 5,
            repeat: -1,
            onRepeat() {
                nextSlide();
            }
        });
    }, [])

    const nextSlide = () => {
        if (n === 3){
            [...imgList.current.children].map(item => {
                gsap.to(item, 3, {x: `+=${28*3}rem`})
            })
        }else{
            [...imgList.current.children].map(item => {
                gsap.to(item, 3, {x: `-=${28}rem`})
            })
        }
        n = (n + 1)%4;
    }
    
    return (
        <Wrapper>
            <ul ref={imgList}>
                <li>
                    <img src={require('../../'+data.imgPath + 'phm1.png')} alt={data.title} />
                </li>
                <li>
                    <img src={require('../../'+data.imgPath + "phm2.png")} alt={data.title} />
                </li>
                <li>
                    <img src={require('../../'+data.imgPath + "phm3.png")} alt={data.title} />
                </li>
                <li>
                    <img src={require('../../'+data.imgPath + "phm4.png")} alt={data.title} />
                </li>
            </ul>
        </Wrapper>
    )
}

export default ImageLotate;