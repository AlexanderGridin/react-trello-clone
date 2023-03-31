import { useEffect, useState } from "react";
import { MaterialIcon, AppPageLayout, PageTitle } from "@alexandergridin/rtc-components-lib";

import { UserDto, UserViewModel } from "entities/User/models";
import { useSwitch } from "shared/hooks";
import { getUsersAsync } from "api/User/services";

import { UsersTable } from "../../widgets/users/UsersTable";

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
