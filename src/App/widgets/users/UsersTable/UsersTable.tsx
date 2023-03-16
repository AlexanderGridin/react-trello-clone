import { RemoveButton } from "App/components/buttons/RemoveButton/RemoveButton";
import { UserDto, UserViewModel } from "App/entities/User/models";
import { useSwitch } from "App/hooks/useSwitch";
import { useSelectUser } from "App/store/User/hooks";
import { Table } from "shared/components/Table/Table";
import { deleteUser as deleteUserFromApi } from "App/api/User/services";
import { ITableColumn } from "shared/components/Table/models";

interface IUsersTableProps {
  users: UserViewModel[];
  onDeleteUser: (user: UserViewModel) => void;
}

const columns: ITableColumn<UserViewModel>[] = [
  { title: "ID", field: "id" },
  { title: "Name", field: "name" },
  { title: "", field: "actions", cellAlign: "center" },
];

export const UsersTable = ({ users, onDeleteUser }: IUsersTableProps) => {
  const user = useSelectUser();
  const [isLoading, startLoading, endLoading] = useSwitch();

  const deleteUser = (user: UserViewModel | undefined) => async () => {
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
    <Table<UserViewModel> columns={columns} rows={users} isLoading={isLoading}>
      {(cellValue, field, row) => {
        switch (field) {
          case "name":
          case "id":
            return user?.id === row?.id ? <b style={{ color: "#5E81AC" }}>{cellValue}</b> : cellValue;
          case "actions":
            return user?.id === row?.id ? null : <RemoveButton onClick={deleteUser(row)} />;

          default:
            return cellValue;
        }
      }}
    </Table>
  );
};
