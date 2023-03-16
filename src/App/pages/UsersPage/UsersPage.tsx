import { useEffect, useState } from "react";

import { AppPageLayout } from "App/components/AppPageLayout/AppPageLayout";
import { PageTitle } from "App/components/PageTitle/PageTitle";
import { UserDto, UserViewModel } from "App/entities/User/models";
import { UsersTable } from "App/widgets/users/UsersTable/UsersTable";
import { FlexContainer } from "shared/components/FlexContainer";
import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";
import { Icon } from "shared/components/Icon/Icon";
import { useSwitch } from "App/hooks";
import { getUsers } from "App/api/User/services";

export const UsersPage = () => {
  const [users, setUsers] = useState<UserViewModel[] | null>(null);
  const [isLoading, startLoading, endLoading] = useSwitch(true);

  const loadUsers = async () => {
    const usersDtos = await getUsers();
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
    <AppPageLayout
      isLoading={isLoading}
      slotHeader={
        <PageTitle>
          <FlexContainer>
            <Icon icon={MaterialIcon.Group} className="mr" /> Users
          </FlexContainer>
        </PageTitle>
      }
    >
      <UsersTable users={users ?? []} onDeleteUser={handleDeleteUser} />
    </AppPageLayout>
  );
};