import React from "react";
import AppRoutes from "../routes";
import { Modal } from "../components/modal";
import { AppStyles } from "./styled";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { openModalWindow } from "../store/modal";
import { Preloader } from "../components/preloader";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const isFirstTimeLogin = useAppSelector(
    (store) => store.user.user?.firstSignIn
  );


  React.useEffect(() => {
    isFirstTimeLogin && dispatch(openModalWindow({ type: "welcomeModal" }));
  }, [isFirstTimeLogin]);

  return (
    <>
      <AppStyles />
      <AppRoutes />
      <Modal />
    </>
  );
};

export default App;
