import { useReducer } from "react";
import { ButtonType } from "shared/components/Button/enums/ButtonType";
import style from "./Toggler.module.css";

interface TogglerProps {
  initialValue?: boolean;
  label?: string;
  onToggle: (isActive: boolean) => void;
}

export const Toggler = ({ initialValue = false, label = "", onToggle }: TogglerProps) => {
  const [isActive, dispatch] = useReducer((_: boolean, payload: boolean) => !payload, initialValue);
  const cn = `${style.button} ${isActive ? style.active : ""}`;

  return (
    <div className={style.container}>
      <button
        type={ButtonType.Button}
        className={cn}
        onClick={() => {
          dispatch(isActive);
          onToggle(!isActive);
        }}
      >
        Toogler
      </button>

      {label && <span className={style.label}>{label}</span>}
    </div>
  );
};
