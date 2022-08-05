import React, { FC,FocusEventHandler, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Link, Routes, useParams } from "react-router-dom";
import { fetchPostByIdRequest } from "../../redux/actions/postsActions";
import { RootState } from "../../redux/redusers/rootReducer";
import "./Content.css";
import PostCard from "../../components/PostCard";
import { Theme, useThemeContext } from '../../context/themeModeContext';
import classnames from "classnames";
import { IPost } from "../../redux/IPagination/IPagination";
import Lottie from "react-lottie";
import animationData from "../../components/Lotties/93809-moon.json";
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
} from "react-share";

type ContentProps = {};

const Content: FC<ContentProps> = ({}: any) => {
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
  const params = useParams();
  const dispatch = useDispatch();
  const {
    posts: { pending, selectedPost, error, posts },
    pagination: { currentPage, itemsPerPage },
  } = useSelector((state: RootState) => state);
  useEffect(() => {
    if (params.id) {
      dispatch(fetchPostByIdRequest(Number(params.id)));
    }
  }, [params.id]);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const shareUrl = selectedPost?.url;
  const title = selectedPost?.title;
  return (
    <>
      {pending ? (
        <div className="LottieClass">
          <Lottie options={defaultOptions} height={300} width={300} />
        </div>
      ) : error ? (
        <div
          className={classnames({
            ["ErrorClassLight"]: isLightTheme,
            ["ErrorClassDark"]: !isLightTheme,
          })}
        >
          Error
        </div>
      ) : (
        <div
          className={classnames({
            ["ContentPageMainBoxLight"]: isLightTheme,
            ["ContentPageMainBoxDark"]: !isLightTheme,
          })}
        >
          <div className="ContentPageLink">
            <Link
              className={classnames({
                ["ContentPageLinkMainLight"]: isLightTheme,
                ["ContentPageLinkMainDark"]: !isLightTheme,
              })}
              to="/"
            >
              Home
            </Link>
            <span
              className={classnames({
                ["ContentPageLinkSecondaryLight"]: isLightTheme,
                ["ContentPageLinkSecondaryDark"]: !isLightTheme,
              })}
            >
              / Post {selectedPost?.id}
            </span>
          </div>
          <div
            className={classnames({
              ["ContentPageTitleLight"]: isLightTheme,
              ["ContentPageTitleDark"]: !isLightTheme,
            })}
          >
            {selectedPost?.title}
          </div>
          <img
            className="ContentPageImage"
            src={selectedPost?.imageUrl}
            alt={selectedPost?.title}
          />
          <div
            className={classnames({
              ["ContentPageTextLight"]: isLightTheme,
              ["ContentPageTextDark"]: !isLightTheme,
            })}
          >
            {selectedPost?.summary}
          </div>
          <div className="ContentPageShare">
            <div
              className={classnames({
                ["ContentPageShareIconLight"]: isLightTheme,
                ["ContentPageShareIconDark"]: !isLightTheme,
              })}
            >
              <FacebookShareButton
                url={shareUrl}
                quote={title}
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={40} round />
              </FacebookShareButton>
            </div>
            <div
              className={classnames({
                ["ContentPageShareIconLight"]: isLightTheme,
                ["ContentPageShareIconDark"]: !isLightTheme,
              })}
            >
              <TwitterShareButton
                url={shareUrl}
                title={title}
                className="Demo__some-network__share-button"
              >
                <TwitterIcon size={40} round />
              </TwitterShareButton>
            </div>
            <div
              className={classnames({
                ["ContentPageShareIconLight"]: isLightTheme,
                ["ContentPageShareIconDark"]: !isLightTheme,
              })}
            >

              <TelegramShareButton
                url={shareUrl}
                title={title}
                className="Demo__some-network__share-button"
              >
                <TelegramIcon size={40} round />
              </TelegramShareButton>
            </div>
          </div>
          <div className="ContentPagePosts">
            {posts?.slice(0, 3).map((item: IPost, index: number) => (
              <PostCard
                key={item.id}
                id={`${item.id}`}
                image={`${item.imageUrl}`}
                text={item.title}
                date={`${item.publishedAt}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Content;