import { useState } from "react";
import { AxiosError } from "axios";
import { login, createUser, UserLoginDto } from "App/api/User/services";
import { AppPageLayout } from "App/components/AppPageLayout/AppPageLayout";
import { UserViewModel } from "App/entities/User/models";
import { UserSignInForm, UserSignInFormValue, CreateUserForm, CreateUserFormValue } from "App/widgets/users/forms";
import { Button } from "shared/components/Button/Button";
import { Card } from "shared/components/Card/Card";
import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";
import style from "./IndexPage.module.css";
import { mapUserDtoToViewModel } from "App/entities/User/mappers/mapUserDtoToViewModel";
import { Alert } from "shared/components/Alert/Alert";
import { useSelectUser, useUserDispatcher } from "App/store/User/hooks";
import { accessTokenStorage } from "App/local-storage";

export const IndexPage = () => {
  const user = useSelectUser();
  const userDispatcher = useUserDispatcher();

  const [isShowSignInForm, setIsShowSignInForm] = useState(false);
  const [isShowCreateUserForm, setIsShowCreateUserForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const toggleSignInForm = () => setIsShowSignInForm(!isShowSignInForm);
  const toggleCreateUserForm = () => setIsShowCreateUserForm(!isShowCreateUserForm);

  const handleUserSignIn = async (formValue: UserSignInFormValue) => {
    setIsLoading(true);
    setAlertMessage("");

    const userDto: UserLoginDto | AxiosError = await login({ name: formValue.userName, password: formValue.password });

    if (!userDto) {
      setIsLoading(false);
      return;
    }

    if (userDto instanceof AxiosError) {
      const errorData = userDto.response?.data as { message: string };
      setAlertMessage(errorData.message);
      setIsLoading(false);

      return;
    }

    const user: UserViewModel = mapUserDtoToViewModel(userDto);

    accessTokenStorage.set(userDto.accessToken);
    userDispatcher.setUser(user);

    setIsShowSignInForm(false);
    setIsLoading(false);
  };

  const handleCreateUser = async (formValue: CreateUserFormValue) => {
    setIsLoading(true);

    const userDto = await createUser({ name: formValue.userName, password: formValue.password });

    if (!userDto) {
      setIsLoading(false);
      return;
    }

    if (userDto instanceof AxiosError) {
      const errorData = userDto.response?.data as { message: string };
      setAlertMessage(errorData.message);
      setIsLoading(false);

      return;
    }

    const user: UserViewModel = mapUserDtoToViewModel(userDto);
    accessTokenStorage.set(userDto.accessToken);
    userDispatcher.setUser(user);

    setIsShowCreateUserForm(false);
    setIsLoading(false);
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
