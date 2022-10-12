import styled from "styled-components";

const Wrapper = styled.div`
    width: 50%;
    position: relative;

    img{
        width: 100%;
        height: auto;
        box-shadow: 0px 0px 40px rgba(0,0,10,0.25); 
    }
`;

const ImageClip = ({path, start, count}) => {
    console.log(path);
    console.log(Array.from({length: count} , (_,start) => start+1))
    return(
        <Wrapper>
            {/* {Array.from({length: count} , (_,start) => start+1).map((i) => {
                return <img key={i} src={require(path+"8.png")} alt={i} />
            })} */}
            <img src={require(path+"8.png")} alt={path} />
        </Wrapper>
    )
}

export default ImageClip;