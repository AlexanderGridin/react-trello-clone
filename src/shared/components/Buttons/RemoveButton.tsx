import { ButtonType } from "shared/enums/ButtonType";
import { MaterialIcon } from "shared/enums/MaterialIcon";
import styled from "styled-components";
import { Icon } from "../Icon/Icon";
import { ErrorButton } from "./ErrorButton";

const Button = styled(ErrorButton)`
  padding: 7px;
`;

interface RemoveButtonProps {
  className?: string;
  onClick: () => void;
}

export const RemoveButton = ({ className, onClick }: RemoveButtonProps) => {
  return (
    <Button type={ButtonType.Button} className={className} onClick={onClick}>
      <Icon icon={MaterialIcon.Delete} />
    </Button>
  );
};
