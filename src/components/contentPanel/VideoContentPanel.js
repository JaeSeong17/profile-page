import styled from "styled-components";
import TextBox from "../contentBox/TextBox";

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 600px;
    width: 100%;
    margin-bottom: 8rem;
    padding: 4rem;
`;

const VideoArea = styled.div`

`;

const VideoContentPanel = ({data}) => {
    console.log('video', data);
    return (
        <Wrapper>
            <TextBox data={data}/>
            <VideoArea>
                <video autoPlay={true} controls>
                    <source src="../../static/video/unity_project.mp4" type="video/mp4" />
                </video>
            </VideoArea>
        </Wrapper>
    )
}

export default VideoContentPanel;