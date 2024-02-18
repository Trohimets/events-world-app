import { FC, useState } from "react";
import { Button, Form, Input, Switch } from "antd";
import { AuthContainer, ErrorMessage, Label, LoginForm } from "./styled";
import { errorHandler } from "../../utils/errorHandler";
import { FieldType } from "../../utils/types/types";
import { useGetLoginUserMutation } from "../../api/auth";
import { useNavigate } from "react-router-dom";
interface FormData {
  username: string;
  password: string;
}
export const Authorization: FC = () => {
  const [error, setError] = useState();

  const [isLogin, setIsLogin] = useState(true);
  const onChange = () => {
    setIsLogin((prev) => !prev);
  };
  const navigate = useNavigate();
  const handleAuth = (formData: FormData) => {
    const body = {
      username: formData.username,
      password: formData.password,
      authType: isLogin ? "login" : "register",
    };

    getAuthMutation(body)
      .unwrap()
      .then((response) => {
        if (isLogin) {
          localStorage.setItem("token", response.token);
          localStorage.setItem("user_id", response.id);
          navigate("/");
        } else if (!isLogin) setIsLogin(true);
      })
      .catch((error) => {
        console.error("Authentication error:", error);
      });
  };

  const [getAuthMutation] = useGetLoginUserMutation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <AuthContainer>
        <div
          style={{ fontSize: "3em", padding: "0 0 20px 0", fontWeight: 600 }}
        >
          Сервис поиска предельно допустимых цен на лекарства
        </div>
        <Switch defaultChecked onChange={onChange} />
        <div style={{ fontSize: "1.5em", padding: "0 0 10px 0" }}>
          Для доступа к сервису требуется авторизация
        </div>
        <LoginForm
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          //@ts-ignore
          onFinish={handleAuth}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label={<Label>Email</Label>}
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input value={username} onChange={handleUsernameChange} />
          </Form.Item>

          <Form.Item<FieldType>
            label={<Label>Password</Label>}
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password value={password} onChange={handlePasswordChange} />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            style={{ margin: "0 auto", display: "flex" }}
          >
            <p style={{ color: "white" }}>
              {" "}
              {isLogin ? "Войти" : "Зарегистрироваться"}
            </p>
          </Button>

          {error ? <ErrorMessage>{errorHandler(error)}</ErrorMessage> : null}
        </LoginForm>
      </AuthContainer>
    </>
  );
};
