import { useMemo } from "react";

import { Table } from "shared/components/Table/Table";
import { UserDto, UserViewModel } from "App/entities/User/models";
import { useSwitch } from "App/hooks/useSwitch";
import { deleteUser as deleteUserFromApi } from "App/api/User/services";
import { RemoveButton } from "App/components/buttons/RemoveButton/RemoveButton";
import { ITableColumn } from "shared/components/Table/models";
import { useSelectUser } from "App/store/User/hooks";
import { UserTableItem } from "App/entities/User/models/UserTableItem";

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

    const dto = await deleteUserFromApi(user.id);
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
            return user?.id === row?.id ? <>-</> : <RemoveButton onClick={deleteUser(row)} />;

          default:
            return <>{cellValue}</>;
        }
      }}
    </Table>
  );
};
