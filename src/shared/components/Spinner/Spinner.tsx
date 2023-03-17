import { ITestId } from "shared/models";

import style from "./Spinner.module.css";

interface ISpinnerProps extends ITestId {
  backgroundColor?: string;
}

export const Spinner = ({ backgroundColor = "#2e3440", "data-testid": testId }: ISpinnerProps) => {
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
