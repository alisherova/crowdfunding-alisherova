import styled from "styled-components";

export const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 0.5rem;
  background-color: #a7abaa;
  overflow: hidden;
  margin: 2rem 0;
`;

export const ProgressBarFill = styled.div`
  width: ${props => (props.percentage ? `${props.percentage}%` : "0")};
  height: 100%;
  background-color: #39a686;
  transition: width 0.3s ease-in-out;
`;
