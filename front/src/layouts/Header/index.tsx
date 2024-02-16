import { Avatar, Popover } from "antd";
import { StopTwoTone } from "@ant-design/icons";
import { ButtonPopover, HeaderWrapper } from "./styled";
// import Logo from './../../assets/logo/logo.svg';
import { Link, useNavigate } from "react-router-dom";
import { Page } from "../../utils/constants/navigation";
import { MAIN_PAGE_URI } from "../../utils/constants/navigation";

import { useAppDispatch, useAppSelector } from "../../hooks";

const Header = () => {
  const dispatch = useAppDispatch();
  // const handleLogout = () => {
  //   requestLogout().then(() => dispatch(logout()));
  // };
  // const isLogin = useAppSelector((store) => store.auth.isLogin);
  const content = (
    <Link to={Page.AUTHORIZATION}>
      {/* {isLogin && <ButtonPopover onClick={handleLogout}>Выйти</ButtonPopover>}
      {!isLogin && <ButtonPopover onClick={handleLogout}>Войти</ButtonPopover>} */}
    </Link>
  );

  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <>
        {/* <HeaderLogo src={Logo}></HeaderLogo> */}
        <div style={{ fontSize: "36px", fontWeight: "600", color: "#fafafa" }}>
          Учебное задание
        </div>
      </>

      <Avatar
        size="large"
        icon={<StopTwoTone twoToneColor={["#949494", "#963f3f"]} />}
        style={{ cursor: "pointer" }}
        onClick={() => {
          localStorage.clear(), navigate("/auth");
        }}
      />
    </HeaderWrapper>
  );
};

export default Header;
