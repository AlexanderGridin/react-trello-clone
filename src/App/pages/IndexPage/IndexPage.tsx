import { Alert, Button, Card, MaterialIcon, AppPageLayout } from "@alexandergridin/rtc-components-lib";
import { useState } from "react";
import { AxiosError } from "axios";

import { useSwitch } from "shared/hooks";
import { accessTokenStorage } from "local-storage";
import { loginUserAsync, createUserAsync } from "api/User/services";
import { useSelectUser, useUserDispatcher } from "store/User/hooks";
import { AuthenticatedUserDto, UserCreateDto, UserLoginDto, UserViewModel } from "entities/User/models";

import { UserSignInForm, UserSignInFormValue, CreateUserForm, CreateUserFormValue } from "../../widgets/users/forms";
import style from "./IndexPage.module.css";

export const IndexPage = () => {
  const user = useSelectUser();
  const userDispatcher = useUserDispatcher();

  const [isLoading, startLoading, endLoading] = useSwitch();
  const [isShowSignInForm, showSignInForm, hideSignInForm] = useSwitch();
  const [isShowCreateUserForm, showCreateUserForm, hideCreateUserForm] = useSwitch();

  const [alertMessage, setAlertMessage] = useState("");

  const handleUserSignIn = async (formValue: UserSignInFormValue) => {
    startLoading();
    setAlertMessage("");

    const userLoginDto = new UserLoginDto({
      name: formValue.userName,
      password: formValue.password,
    });

    const userDto: AuthenticatedUserDto | AxiosError = await loginUserAsync(userLoginDto);

    if (!userDto) {
      endLoading();
      return;
    }

    // TODO: this is need to be refactored
    if (userDto instanceof AxiosError) {
      const errorData = userDto.response?.data as { message: string };
      setAlertMessage(errorData.message);
      endLoading();

      return;
    }

    const user: UserViewModel = AuthenticatedUserDto.toViewModel(userDto);
    accessTokenStorage.set(userDto.accessToken);
    userDispatcher.setUser(user);

    hideSignInForm();
    endLoading();
  };

  const handleCreateUser = async (formValue: CreateUserFormValue) => {
    startLoading();

    const userCreateDto = new UserCreateDto({
      name: formValue.userName,
      password: formValue.password,
    });

    const userDto: AuthenticatedUserDto | AxiosError = await createUserAsync(userCreateDto);

    if (!userDto) {
      endLoading();
      return;
    }

    if (userDto instanceof AxiosError) {
      const errorData = userDto.response?.data as { message: string };
      setAlertMessage(errorData.message);
      endLoading();

      return;
    }

    const user: UserViewModel = AuthenticatedUserDto.toViewModel(userDto);
    accessTokenStorage.set(userDto.accessToken);
    userDispatcher.setUser(user);

    hideCreateUserForm();
    endLoading();
  };

  const handleAlertClose = () => {
    setAlertMessage("");
  };

  if (!user) {
    return <AppPageLayout isLoading></AppPageLayout>;
  }

  if (user.isLoggedIn) {
    return (
      <AppPageLayout>
        <div className={style.container}>
          <Card className={style.card}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "15px",
              }}
            >
              <img
                style={{ borderRadius: "50%", boxShadow: "0 0 15px rgba(0,0,0,0.3)" }}
                src={`https://picsum.photos/seed/${user.name}/75`}
                alt="user avatar"
              />
            </div>
            <h1 className={style.title} style={{ marginBottom: "0" }}>
              Hello!! {user.name}!
            </h1>
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

          {alertMessage && (
            <Alert type="error" title="Error" className={style.alert} onClose={handleAlertClose}>
              {alertMessage}
            </Alert>
          )}

          {isShowSignInForm && <UserSignInForm onSubmit={handleUserSignIn} onCancel={hideSignInForm} />}
          {isShowCreateUserForm && <CreateUserForm onCreate={handleCreateUser} onCancel={hideCreateUserForm} />}

          {!isShowSignInForm && !isShowCreateUserForm && (
            <div className={style.footer}>
              <Button icon={MaterialIcon.Login} style={{ marginRight: "7px" }} onClick={showSignInForm}>
                Sign in
              </Button>

              <Button icon={MaterialIcon.AddUser} visualStyle="success" onClick={showCreateUserForm}>
                Create user
              </Button>
            </div>
          )}
        </Card>
      </div>
    </AppPageLayout>
  );
};
