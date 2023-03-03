import { NavLink } from "react-router-dom";
import { FlexContainer } from "shared/components/FlexContainer";
import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";
import { Icon } from "shared/components/Icon/Icon";
import style from "./AppNavigation.module.css";

const getLinkClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${style.link} ${style.active}` : style.link;

export const AppNavigation = () => {
  return (
    <nav>
      <ul className="plain-list">
        <li>
          <NavLink to="/boards" className={getLinkClassName}>
            <FlexContainer>
              <Icon className="mr" icon={MaterialIcon.Boards} />
              Boards
            </FlexContainer>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
