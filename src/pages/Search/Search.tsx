import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../redux/redusers/rootReducer";

import PostCard from "../../components/PostCard";

import Pagination from "../../components/Pagination";
import { Theme, useThemeContext} from "../../context/themeModeContext";
import classnames from "classnames";
import { useSearchParams} from 'react-router-dom';
import { IPost } from "../../redux/IPagination/IPagination";
import './Search.css';

type SearchProps = {};

const Search: FC<SearchProps>  = ({}: any) => {
    const { theme } = useThemeContext();
    const isLightTheme = theme === Theme.Light;
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
  
    const {
      posts: { pending, posts, error },
      pagination: { currentPage, itemsPerPage },
    } = useSelector((state: RootState) => state);



  return (
    <div
      className={classnames({
        ["SearchMainMainBoxLight"]: isLightTheme,
        ["SearchMainMainBoxDark"]: !isLightTheme,
      })}
    >
      <div
        className={classnames({
          ["SearchPageTitleLight"]: isLightTheme,
          ["SearchPageTitleDark"]: !isLightTheme,
        })}
      >
        Search results{" "}
        {searchParams.get("title_contains")
          ? `"${searchParams.get("title_contains")}"`
          : null}
      </div>

      <div className="SearchPagePosts">
        {posts.length ? (
          posts?.map((item: IPost, index: number) => (
            <PostCard
              key={item.id}
              id={`${item.id}`}
              image={`${item.imageUrl}`}
              text={item.title}
              date={`${item.publishedAt}`}
            />
          ))
        ) : (
          <div
            className={classnames({
              ["NoResultsLight"]: isLightTheme,
              ["NoResultsDark"]: !isLightTheme,
            })}
          >
            No results
          </div>
        )}
      </div>
      <div className="SearchPagePagination">
        <Pagination />
      </div>
    </div>
  );
};
  


    export default Search;