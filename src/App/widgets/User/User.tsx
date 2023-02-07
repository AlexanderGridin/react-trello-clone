import style from "./User.module.css";

export const User = () => {
  return (
    <div className={style.container}>
      <div className={style.image}></div>
      <p>Test User Name</p>
    </div>
  );
};
