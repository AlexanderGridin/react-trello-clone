import style from "./Spinner.module.css";

export const Spinner = () => {
  return (
    <div className={style.SpinnerContainer}>
      <div className={style.Spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
