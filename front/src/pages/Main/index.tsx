import Header from "../../layouts/Header";
import Main from "../../layouts/Main";
import { ContentWrapper } from "./styled";
import { ViewContainer } from "../../layouts/view-container";
import SideNavigation from "../../layouts/Side-nav";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("auth", { replace: true });
    } else navigate(`/`, { replace: true });
  }, []);

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
