import { NavLink } from "react-router-dom";
import style from "./AppNavigation.module.css";

export const AppNavigation = () => {
  return (
    <nav>
      <ul className={`plain-list ${style.List}`}>
        <li className={style.ListItem}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${style.LinkActive} ${style.Link}` : style.Link
            }
          >
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
