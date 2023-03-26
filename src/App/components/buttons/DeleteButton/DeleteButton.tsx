import { MaterialIcon, IconButton, Tooltip } from "@alexandergridin/rtc-components-lib";

import { IClick, IClassName } from "shared/models";

interface IDeleteButtonProps extends IClick, IClassName {}

export const DeleteButton = ({ className, onClick }: IDeleteButtonProps) => {
  return (
    <Tooltip content="Delete">
      <IconButton icon={MaterialIcon.Delete} activeColor="#BF616A" className={className} onClick={onClick} />
    </Tooltip>
  );
};
