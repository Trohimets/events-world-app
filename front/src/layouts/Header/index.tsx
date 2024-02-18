import { Avatar, Popover } from "antd";
import { StopTwoTone } from "@ant-design/icons";
import { ButtonPopover, HeaderWrapper } from "./styled";
import { Link, useNavigate } from "react-router-dom";
import { Page } from "../../utils/constants/navigation";
import { MAIN_PAGE_URI } from "../../utils/constants/navigation";

import { useAppDispatch, useAppSelector } from "../../hooks";

const Header = () => {
  const dispatch = useAppDispatch();
  const content = (
    <Link to={Page.AUTHORIZATION}>
    </Link>
  );

  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <>
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
