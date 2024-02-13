import { MenuProps } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { MainSider, SliderButton, SliderMenu, SliderWrapper } from "./styled";
import { Page } from "../../utils/constants/navigation";

import { FC } from "react";

type MenuItem = Required<MenuProps>["items"][number];

interface ISideNavigationProps {
  isCollapsed: boolean;
  setIsCollapsed: (arg0: boolean) => void;
}

const SideNavigation: FC<ISideNavigationProps> = ({
  isCollapsed,
  setIsCollapsed,
}) => {
  const itemsForUser: MenuItem[] = [
    getItem(<Link to={Page.ABOUT}>О сервисе</Link>, "1", <PieChartOutlined />),
    getItem(<Link to={Page.SEARCH}>Поиск</Link>, "2", <DesktopOutlined />),
  ];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }
  return (
    <SliderWrapper>
      <MainSider trigger={null} collapsible collapsed={isCollapsed}>
        <div className="demo-logo-vertical" />
        <SliderMenu
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={itemsForUser}
        />
      </MainSider>

      <SliderButton
        type="text"
        icon={isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setIsCollapsed(!isCollapsed)}
      />
    </SliderWrapper>
  );
};

export default SideNavigation;
