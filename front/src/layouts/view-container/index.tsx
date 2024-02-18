import { FC } from "react";
import { Outlet } from "react-router-dom";
import { ContentWrapper } from "./styled";

interface IViewContainer {
  isCollapsed: boolean;
}

export const ViewContainer: FC<IViewContainer> = ({ isCollapsed }) => {
  return (
    <ContentWrapper iscollapsed={isCollapsed}>
      <Outlet />
    </ContentWrapper>
  );
};
