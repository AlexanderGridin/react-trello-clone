import { Outlet } from "react-router-dom";
import { Sidebar } from "App/widgets/Sidebar/Sidebar";
import style from "./AppLayout.module.css";

export const AppLayout = () => {
  return (
    <div className={style.container}>
      <aside className={style.sidebar}>
        <Sidebar />
      </aside>

      <main className={style.main}>
        <Outlet />
      </main>
    </div>
  );
};
