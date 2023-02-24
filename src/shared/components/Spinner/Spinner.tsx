import { TestId } from "shared/models/TestId";
import style from "./Spinner.module.css";

interface SpinnerProps extends TestId {
  backgroundColor?: string;
}

export const Spinner = ({ backgroundColor = "#2e3440", "data-testid": testId }: SpinnerProps) => {
  return (
    <div data-testid={testId} className={style.SpinnerContainer} style={{ backgroundColor }}>
      <div className={style.Spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
