import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import ImageSlider from '../contentBox/ImageSlider';
import MediaBox from '../contentBox/MediaBox';
import TextBox from '../contentBox/TextBox';
import ImageShow from 'components/contentBox/ImageShow';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 400px;
  width: 100%;
  margin-bottom: 8rem;
  padding: 1rem;
  overflow: hidden;
`;

const ImageArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30rem;
  width: 32rem;
  margin: 0 auto;
`;

const ContentPanel = ({ data, side, imgSlider, imgShow, imgBox }) => {
  gsap.registerPlugin(ScrollTrigger);
  return (
    <Wrapper className="responsive">
      {side === 'left' && (
        <ImageArea className="imgArea">
          {imgSlider && <ImageSlider />}
          {imgShow && <ImageShow data={data} />}
          {imgBox && <MediaBox data={data} />}
        </ImageArea>
      )}
      <TextBox data={data} gitBtn={data.github} />
      {side === 'right' && (
        <ImageArea className="imgArea">
          {imgSlider && <ImageSlider />}
          {imgShow && <ImageShow data={data} />}
          {imgBox && <MediaBox data={data} />}
        </ImageArea>
      )}
    </Wrapper>
  );
};

export default ContentPanel;
