import { RouteProps } from "react-router-dom";
import HomeMain from "../pages/home/main/HomeMain";
import Services from "../pages/services/Services";

export const routesConfig: RouteProps[] = [
  {
    path: "/",
    Component: HomeMain,
  },
  {
    path: "/Services",
    Component: Services,
  },
];
