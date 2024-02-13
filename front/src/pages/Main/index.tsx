import Header from "../../layouts/Header";
import Main from "../../layouts/Main";
import { ContentWrapper } from "./styled";
import { ViewContainer } from "../../layouts/view-container";
import SideNavigation from "../../layouts/Side-nav";
import { useState } from "react";

const MainPage = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  return (
    <>
      <SideNavigation
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />
      <Header />
      <ContentWrapper>
        <Main>
          <ViewContainer isCollapsed={isCollapsed} />
        </Main>
      </ContentWrapper>
    </>
  );
};

export default MainPage;
