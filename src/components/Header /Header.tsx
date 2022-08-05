import React, { ChangeEvent, FC, useEffect, useState } from "react";
import './Header.css';
import {
    Link,
    useNavigate,
    useSearchParams,
  } from "react-router-dom";
  import { useDispatch, useSelector } from "react-redux";
  import { Theme, useThemeContext } from "../../context/themeModeContext";
  import { fetchPostsRequest } from "../../redux/actions/postsActions";
  import { clearPaginationActions } from "../../redux/actions/paginationActions/paginationActions";
  import { RootState } from "../../redux/redusers/rootReducer";
  import classnames from "classnames";

  type HeaderProps = {};

const Header: FC<HeaderProps> = ({}: any) => {
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
  const [value, setValue] = useState("");
  const auth = localStorage.getItem("authToken");

  const dispatch = useDispatch();
  const {
    posts: { pending, posts, error },
    pagination: { currentPage, itemsPerPage },
  } = useSelector((state: RootState) => state);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("title_contains");

  const redirect = () => {
    const params = new URLSearchParams();
    if (value) {
      params.append("title_contains", value);
    } else {
      params.delete("title_contains");
    }
    navigate({
      pathname: "/search",
      search: params.toString(),
    });
  };

  useEffect(() => {
    if (filter) {
      setValue(filter);
      dispatch(fetchPostsRequest(`&title_contains=${filter}`));
    }
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onEnter = (e: any) => {
    if (e.key === "Enter") {
      redirect();
      if (value === "") {
        dispatch(clearPaginationActions());
      }
      dispatch(fetchPostsRequest(`&title_contains=${value}`));
    }
  };

  return (
    <div
      className={classnames({
        ["HeaderMainBoxLight"]: isLightTheme,
        ["HeaderMainBoxDark"]: !isLightTheme,
      })}
    >
      <Link to={`/`} className="HeaderLogo"></Link>
      {auth && (
        <div
          className={classnames({
            ["HeaderSearchLight"]: isLightTheme,
            ["HeaderSearchDark"]: !isLightTheme,
          })}
        >
          <input
            className={classnames({
              ["HeaderInputSearchLight"]: isLightTheme,
              ["HeaderInputSearchDark"]: !isLightTheme,
            })}
            value={value}
            onChange={handleInputChange}
            onKeyDown={onEnter}
            type="text"
          />
          <i
            className={classnames({
              ["fa-solid fa-magnifying-glass iconLight"]: isLightTheme,
              ["fa-solid fa-magnifying-glass iconDark"]: !isLightTheme,
            })}
          ></i>
        </div>
      )}
      {auth && (
        <div className="HeaderUser">
          <div className="HeaderUserIcon">
            <p className="HeaderUserP">AM</p>
            <i className="fa-regular fa-user"></i>
          </div>

          <div
            className={classnames({
              ["HeaderUserNameLight"]: isLightTheme,
              ["HeaderUserNameDark"]: !isLightTheme,
            })}
          >
            Artem Malkin
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;