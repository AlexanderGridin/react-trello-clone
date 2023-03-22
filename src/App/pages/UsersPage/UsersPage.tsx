import { useEffect, useState } from "react";

import { UserDto, UserViewModel } from "App/entities/User/models";
import { useSwitch } from "App/hooks";
import { PageTitle } from "App/components/PageTitle";
import { UsersTable } from "App/widgets/users/UsersTable";
import { MaterialIcon } from "shared/components";
import { getUsersAsync } from "App/api/User/services";
import { AppPageLayout } from "App/components/AppPageLayout";

export const UsersPage = () => {
  const [users, setUsers] = useState<UserViewModel[] | null>(null);
  const [isLoading, startLoading, endLoading] = useSwitch(true);

  const loadUsers = async () => {
    const usersDtos = await getUsersAsync();
    setUsers(usersDtos.map((dto: UserDto) => UserDto.toViewModel(dto)));
    endLoading();
  };

  useEffect(() => {
    startLoading();
    loadUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteUser = (deletedUser: UserViewModel) => {
    setUsers(users?.filter((user: UserViewModel) => user.id !== deletedUser.id) ?? []);
  };

  return (
    <AppPageLayout isLoading={isLoading} slotHeader={<PageTitle icon={MaterialIcon.Group}>Users</PageTitle>}>
      <UsersTable users={users ?? []} onDeleteUser={handleDeleteUser} />
    </AppPageLayout>
  );
};
