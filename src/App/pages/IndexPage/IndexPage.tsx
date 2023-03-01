import { useState } from "react";
import { getUser } from "App/api/User/getUser";
import { AppPageLayout } from "App/components/AppPageLayout/AppPageLayout";
import { UserViewModel } from "App/entities/User/models";
import { useUserDispatcher } from "App/entities/User/state";
import { useAppState } from "App/state/hooks/useAppState";
import { UserSignInForm, UserSignInFormValue, CreateUserForm, CreateUserFormValue } from "App/widgets/users/forms";
import { Button } from "shared/components/Button/Button";
import { Card } from "shared/components/Card/Card";
import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";
import { generateId } from "shared/utils/generateId";
import style from "./IndexPage.module.css";

export const IndexPage = () => {
  const { user } = useAppState();
  const [isShowSignInForm, setIsShowSignInForm] = useState(false);
  const [isShowCreateUserForm, setIsShowCreateUserForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const userDispatcher = useUserDispatcher();

  const toggleSignInForm = () => setIsShowSignInForm(!isShowSignInForm);
  const toggleCreateUserForm = () => setIsShowCreateUserForm(!isShowCreateUserForm);

  const handleUserSignIn = async (formValue: UserSignInFormValue) => {
    setIsLoading(true);

    const user: UserViewModel = {
      id: generateId(),
      name: formValue.userName,
      isLoggedIn: true,
    };

    // TODO: here will be GET request for user check
    await getUser(user.id);

    localStorage.setItem("userId", user.id);
    userDispatcher.setUser(user);

    setIsLoading(false);
  };

  const handleCreateUser = async (formValue: CreateUserFormValue) => {
    setIsLoading(true);

    const user: UserViewModel = {
      id: generateId(),
      name: formValue.userName,
      isLoggedIn: true,
    };

    // TODO: here will be POST request for user creation
    await getUser(user.id);

    localStorage.setItem("userId", user.id);
    userDispatcher.setUser(user);
  };

  if (!user) {
    return <AppPageLayout isLoading></AppPageLayout>;
  }

  if (user.isLoggedIn) {
    return (
      <AppPageLayout>
        <div className={style.container}>
          <Card className={style.card}>
            <h1 className={style.title}>Hello {user.name}!</h1>
          </Card>
        </div>
      </AppPageLayout>
    );
  }

  return (
    <AppPageLayout>
      <div className={style.container}>
        <Card className={style.card} isLoading={isLoading}>
          <h1 className={style.title}>Welcome to the Tasks Manager app! </h1>

          {isShowSignInForm && <UserSignInForm onSubmit={handleUserSignIn} onCancel={toggleSignInForm} />}
          {isShowCreateUserForm && <CreateUserForm onCreate={handleCreateUser} onCancel={toggleCreateUserForm} />}

          {!isShowSignInForm && !isShowCreateUserForm && (
            <div className={style.footer}>
              <Button icon={MaterialIcon.Login} style={{ marginRight: "7px" }} onClick={toggleSignInForm}>
                Sign in
              </Button>

              <Button icon={MaterialIcon.AddUser} visualStyle="success" onClick={toggleCreateUserForm}>
                Create user
              </Button>
            </div>
          )}
        </Card>
      </div>
    </AppPageLayout>
  );
};
