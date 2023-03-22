import { IClick, IClassName } from "shared/models";
import { MaterialIcon, IconButton, Tooltip } from "shared/components";

interface IDeleteButtonProps extends IClick, IClassName {}

export const DeleteButton = ({ className, onClick }: IDeleteButtonProps) => {
  return (
    <Tooltip content="Delete">
      <IconButton icon={MaterialIcon.Delete} activeColor="#BF616A" className={className} onClick={onClick} />
    </Tooltip>
  );
};
