import { ProgressBarWrapper, ProgressBarFill } from "./ProgressBar.styled";

const ProgressBar = ({ percentage }) => {
  return (
    <ProgressBarWrapper>
      <ProgressBarFill percentage={percentage} />
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
