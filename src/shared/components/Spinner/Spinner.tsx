import style from "./Spinner.module.css";

interface SpinnerProps {
  backgroundColor?: string;
}

export const Spinner = ({ backgroundColor = "#2e3440" }: SpinnerProps) => {
  return (
    <div className={style.SpinnerContainer} style={{ backgroundColor }}>
      <div className={style.Spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
