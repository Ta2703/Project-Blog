import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Route,
  Routes,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import Search from "../Search";
import Main from "../Main";
import Content from "../Content";
import ContentMain from "../../components/ContentMain";
import IsRoute from "../IsRoute/IsRoute";
import SignIn from "../SignIn";



const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContentMain />}>
            <Route path={"/sign-in"} element={<SignIn />}></Route>
            <Route path="/" element={<IsRoute />}>
              <Route path="/" element={<Main />}></Route>
              <Route path={"/content/:id"} element={<Content />} />
              <Route path={"/search"} element={<Search />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };
  

// const Router = () => {
//     return (
//         <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<ContentMain />}>
//                 <Route path={"/sing-in"} element={<SignIn />}></Route>
//                 <Route path="/" element={<IsRoute/>}>
//                 <Route path="/" element={<Main/>}></Route>
//                 <Route path={"/content/:id"} element={<Content />} />
//                 <Route path={"/search"} element={<Search />} />
//                 <Route path="*" element={<Navigate to="/" />} />
//             </Route>
//             </Route>
//             </Routes>
//         </BrowserRouter>
//     );
// };

export default Router;