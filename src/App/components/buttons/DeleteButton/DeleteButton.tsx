import { IClick, IClassName } from "shared/models";
import { Tooltip } from "shared/components/Tooltip";
import { MaterialIcon, IconButton } from "shared/components";

interface IDeleteButtonProps extends IClick, IClassName {}

export const DeleteButton = ({ className, onClick }: IDeleteButtonProps) => {
  return (
    <Tooltip content="Delete">
      <IconButton icon={MaterialIcon.Delete} activeColor="#BF616A" className={className} onClick={onClick} />
    </Tooltip>
  );
};
