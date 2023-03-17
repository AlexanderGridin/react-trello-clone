import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";
import { IconButton } from "shared/components/IconButton/IconButton";
import { Tooltip } from "shared/components/Tooltip/Tooltip";
import { IClick, IClassName } from "shared/models";

interface IDeleteButtonProps extends IClick, IClassName {}

export const DeleteButton = ({ className, onClick }: IDeleteButtonProps) => {
  return (
    <Tooltip content="Delete">
      <IconButton icon={MaterialIcon.Delete} activeColor="#BF616A" className={className} onClick={onClick} />
    </Tooltip>
  );
};
