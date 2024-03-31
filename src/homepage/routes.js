import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ItemView } from "./ItemView";
import { ItemPage } from "../itemPage/ItemPage";

export const homeRoutes = createBrowserRouter([
  { path: "/", element: <ItemView /> },
  // { path: "/all", element: <ItemView /> },
  // {
  //   path: "/active",
  //   element: <ItemView active />,
  // },
  { path: "/account/posts", element: <ItemView thisUser={true} /> },
  { path: "/account/reports", element: <ItemView /> }, //TODO my reports
  { path: "/posts/:itemId", element: <ItemPage /> }, //TODO
]);
