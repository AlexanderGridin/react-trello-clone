import { AppPageLayout } from "App/components/AppPageLayout/AppPageLayout";
import { useUserDispatcher } from "App/entities/User/state";
import { UserViewModel } from "App/entities/User/UserViewModel";
import { UserSignInForm, UserSignInFormValue } from "App/widgets/users/forms";
import { CreateUserForm, CreateUserFormValue } from "App/widgets/users/forms/CreateUserForm/CreateUserForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "shared/components/Button/Button";
import { Card } from "shared/components/Card/Card";
import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";
import { generateId } from "shared/utils/generateId";
import style from "./IndexPage.module.css";

export const IndexPage = () => {
  const [isShowSignInForm, setIsShowSignInForm] = useState(false);
  const [isShowCreateUserForm, setIsShowCreateUserForm] = useState(false);

  const userDispatcher = useUserDispatcher();
  const navigate = useNavigate();

  const toggleSignInForm = () => setIsShowSignInForm(!isShowSignInForm);
  const toggleCreateUserForm = () => setIsShowCreateUserForm(!isShowCreateUserForm);

  const handleUserSignIn = (formValue: UserSignInFormValue) => {
    const user: UserViewModel = {
      id: generateId(),
      userName: formValue.userName,
    };

    localStorage.setItem("user", JSON.stringify(user));
    userDispatcher.setUser(user);
    navigate("/boards");
  };

  const handleCreateUser = (formValue: CreateUserFormValue) => {
    const user: UserViewModel = {
      id: generateId(),
      userName: formValue.userName,
    };

    userDispatcher.setUser(user);
    navigate("/boards");
  };

  return (
    <AppPageLayout>
      <div className={style.container}>
        <Card className={style.card}>
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
