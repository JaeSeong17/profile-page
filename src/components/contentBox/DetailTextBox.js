import AButton from 'components/common/AButton';
import { forwardRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  padding: 0 4rem 0 4rem;
  ul {
    padding: 0;
    margin-bottom: 3rem;
  }
  li {
    margin: 0 0 1.5rem 1.5rem;
  }
`;

const ButtonWrapper = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: end;
`;

const DetailTextBox = forwardRef(({ data }, ref) => {
  return (
    <Wrapper ref={ref} className="detailTextArea">
      <ul>
        {data.detail.explain.map((text, i) => (
          <div key={i}>
            <h4>{text}</h4>
          </div>
        ))}
      </ul>
      <ul>
        <div>
          <h3>Skill</h3>
        </div>
        {data.detail.skill.map((text, i) => (
          <div key={i}>
            <li>{text}</li>
          </div>
        ))}
      </ul>
      <ul>
        <div>
          <h3>Process</h3>
        </div>
        {data.detail.process.map((text, i) => (
          <div key={i}>
            <li>{text}</li>
          </div>
        ))}
      </ul>
      <ul>
        <div>
          <h3>Review</h3>
        </div>
        {data.detail.review.map((text, i) => (
          <div key={i}>
            <li>{text}</li>
          </div>
        ))}
      </ul>
      <ButtonWrapper>
        {data.github && (
          <div>
            <AButton text="Github Link" path={data.github} />
          </div>
        )}
        {data.report && (
          <div>
            <AButton text="Report" path={data.report} report />
          </div>
        )}
      </ButtonWrapper>
    </Wrapper>
  );
});

export default DetailTextBox;
