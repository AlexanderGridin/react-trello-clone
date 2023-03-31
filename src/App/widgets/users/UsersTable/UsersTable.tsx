import { useMemo } from "react";
import { ITableColumn, Table } from "@alexandergridin/rtc-components-lib";

import { UserDto, UserViewModel } from "entities/User/models";
import { useSwitch } from "shared/hooks";
import { deleteUserAsync } from "api/User/services";
import { DeleteButton } from "App/components/buttons";
import { useSelectUser } from "store/User/hooks";
import { UserTableItem } from "entities/User/models/UserTableItem";

const columns: ITableColumn<UserTableItem>[] = [
  { title: "ID", field: "id" },
  { title: "Name", field: "name" },
  { title: "Actions", field: "actions", align: "center", cellAlign: "center" },
];

interface IUsersTableProps {
  users: UserViewModel[];
  onDeleteUser: (user: UserViewModel) => void;
}

export const UsersTable = ({ users, onDeleteUser }: IUsersTableProps) => {
  const user = useSelectUser();
  const [isLoading, startLoading, endLoading] = useSwitch();

  const rows = useMemo(() => users.map((user: UserViewModel) => UserViewModel.toTableItem(user)), [users]);

  const deleteUser = (user: UserTableItem) => async () => {
    if (!user) {
      return;
    }

    startLoading();

    const dto = await deleteUserAsync(user.id);
    if (dto) {
      onDeleteUser(UserDto.toViewModel(dto));
    }

    endLoading();
  };

  return (
    <Table<UserTableItem> columns={columns} rows={rows} rowUniqueKey="id" isLoading={isLoading}>
      {({ cellValue, field, row }) => {
        switch (field) {
          case "id":
          case "name":
            return user?.id === row?.id ? <b style={{ color: "#5E81AC" }}>{cellValue}</b> : cellValue;

          case "actions":
            return user?.id === row?.id ? <>-</> : <DeleteButton onClick={deleteUser(row)} />;

          default:
            return <>{cellValue}</>;
        }
      }}
    </Table>
  );
};
