import { IClick, IClassName } from "shared/models";
import { Tooltip } from "shared/components/Tooltip";
import { IconButton } from "shared/components/IconButton";
import { MaterialIcon } from "shared/components/Icon/enums";

interface IDeleteButtonProps extends IClick, IClassName {}

export const DeleteButton = ({ className, onClick }: IDeleteButtonProps) => {
  return (
    <Tooltip content="Delete">
      <IconButton icon={MaterialIcon.Delete} activeColor="#BF616A" className={className} onClick={onClick} />
    </Tooltip>
  );
};
