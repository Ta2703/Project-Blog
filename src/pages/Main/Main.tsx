import React, { FC, useEffect,  FocusEventHandler, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchPostSort,
  fetchPostsRequest,
} from '../../redux/actions/postsActions';
import { RootState } from "../../redux/redusers/rootReducer";
import "./Main.css";
import Input from "../../components/Input";
import Button from "../../components/Button";
import PostCard from "../../components/PostCard";
import Tabs from "../../components/Tabs";
import Pagination from "../../components/Pagination";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import classnames from "classnames";
import { IPost } from "../../redux/IPagination/IPagination";
import Lottie from "react-lottie";
import animationData from "../../components/Lotties/93809-moon.json";
import BasicSelect from "../../components/BasicSelect/";


type MainProps = {};

const Main: FC<MainProps> = ({}: any) => {
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
  const dispatch = useDispatch();
  const {
    posts: { pending, posts, error },
    pagination: { currentPage, itemsPerPage },
  } = useSelector((state: RootState) => state);
  useEffect(() => {
    dispatch(fetchPostsRequest(""));
  }, []);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [CardClass, setCardClass] = React.useState("");
  const Julia2 = (event: any) => {
    setCardClass(event.target.value);
    let sortArray = [];
    sortArray = posts.sort((a: IPost, b: IPost) =>
      a.publishedAt > b.publishedAt ? 1 : b.publishedAt > a.publishedAt ? -1 : 0
    );
    dispatch(fetchPostSort(sortArray));
  };
  return (
    <>
      {pending ? (
        <div className="LottieClass">
          <Lottie options={defaultOptions} height={300} width={300} />
        </div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <div
          className={classnames({
            ["MainBoxLight"]: isLightTheme,
            ["MainBoxDark"]: !isLightTheme,
          })}
        >
          <div
            className={classnames({
              ["MainTitleLight"]: isLightTheme,
              ["MainTitleDark"]: !isLightTheme,
            })}
          >
            Blog
          </div>
          <div className="TabsSort">
          <Tabs />
          </div>
          <div className="MainSort">
            <div className="MainSortButtons">
              <div
                className={classnames({
                  ["MainSortButtonIconLight"]: isLightTheme,
                  ["MainSortButtonIconDark"]: !isLightTheme,
                  ["active"]: CardClass === "SortDay",
                })}
              >
                <Button
                  btnContent="Day"
                  value="SortDay"
                  onClick={(event: any) => Julia2(event)}
                  className="button_primary"
                  active={CardClass === "SortDay"}
                />
              </div>

              <div
                className={classnames({
                  ["MainSortButtonIconLight"]: isLightTheme,
                  ["MainSortButtonIconDark"]: !isLightTheme,
                  ["active"]: CardClass === "SortWeek",
                })}
              >
                <Button
                  btnContent="Week"
                  value="SortWeek"
                  onClick={(event: any) => Julia2(event)}
                  className="button_primary"
                  active={CardClass === "SortWeek"}
                />
              </div>
              <div
                className={classnames({
                  ["MainSortButtonIconLight"]: isLightTheme,
                  ["MainSortButtonIconDark"]: !isLightTheme,
                  ["active"]: CardClass === "SortMonth",
                })}
              >
                <Button
                  btnContent="Month"
                  value="SortMonth"
                  onClick={(event: any) => Julia2(event)}
                  className="button_primary"
                  active={CardClass === "SortMonth"}
                />
              </div>
              <div
                className={classnames({
                  ["MainSortButtonIconLight"]: isLightTheme,
                  ["MainSortButtonIconDark"]: !isLightTheme,
                  ["active"]: CardClass === "SortYear",
                })}
              >
                <Button
                  btnContent="Year"
                  value="SortYear"
                  onClick={(event: any) => Julia2(event)}
                  className="button_primary"
                  active={CardClass === "SortYear"}
                />
              </div>
            </div>
            <div className="MainSortTab">
        <BasicSelect />
            </div>
          </div>
          <div className="MainPosts">
            {posts?.map((item: IPost, index: number) => (
              <PostCard
                key={item.id}
                id={`${item.id}`}
                image={`${item.imageUrl}`}
                text={item.title}
                date={`${item.publishedAt}`}
              />
))}</div>
          <div className="MainPagination">
            <Pagination />
          </div>
        </div>
      )}
    </>
  );
};

export default Main;