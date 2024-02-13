import { Route, Routes } from "react-router-dom";
import { Page } from "../utils/constants/navigation";
import { Authorization } from "../pages/authorization/authorization";
import MainPage from "../pages/Main";
import { Unavailable } from "../pages/unavailable";
import { NotFound } from "../pages/not-found";
import { AboutPage } from "../views/About";
import { SearchPage } from "../views/Search";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={Page.AUTHORIZATION} element={<Authorization />} />
      <Route path={Page.MAIN} element={<MainPage />}>
        <Route path={Page.ABOUT} element={<AboutPage />} />
        <Route path={Page.SEARCH} element={<SearchPage />} />
      </Route>
      <Route path={Page.UNAVAILABLE} element={<Unavailable />} />
      <Route path={Page.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
