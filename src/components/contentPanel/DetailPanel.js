import styled from "styled-components";
import ImageClip from "components/contentBox/ImageClip";

const Wrapper = styled.div`
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
        margin-bottom: 1.5rem;
    }
`;

const DetailPanel = ({data, path, start, count}) => {
    return (
        <Wrapper>
            <ImageClip path={"../../"+path} start={start} count={count} />
            <ul>
                {data.map((text, i) => (
                    <li key={i}>{text}</li>
                ))}
            </ul>
        </Wrapper>
    )
}

export default DetailPanel;