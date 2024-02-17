import Header from "../../layouts/Header";
import Main from "../../layouts/Main";
import { ContentWrapper } from "./styled";
import { ViewContainer } from "../../layouts/view-container";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const MainPage = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("auth", { replace: true });
    } else navigate(`/`, { replace: true });
  }, []);
const navigation = useNavigate()
  return (
    <>
      <Header />
      <div>

        <Button style={{background: 'red'}} onClick={() => navigate('/about')}>about</Button>
        <Button onClick={() => navigate('/search')}>search  </Button>
        <Button onClick={() => navigate('/history')}>history</Button>
      </div>
      <ContentWrapper>
        <Main>
          <ViewContainer isCollapsed={isCollapsed} />
        </Main>
      </ContentWrapper>
    </>
  );
};

export default MainPage;
