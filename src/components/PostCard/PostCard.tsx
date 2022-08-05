import React, {FC} from "react";
import {Route, Link, Routes, useParams} from 'react-router-dom';
import {Theme, useThemeContext} from '../../context/themeModeContext';
import './PostCard.css';
import classnames from "classnames";
import format from "date-fns/format";
import ImgPost from '../../img/card.png';


type PostCardProps = {
    id: string;
    image: string;
    text: string;
    date: string;
  };
  
  const PostCard: FC<PostCardProps> = ({ id, image, text, date }) => {
const imgPost = ImgPost;
const { theme } = useThemeContext();
const isLightTheme = theme === Theme.Light;

function newDate(date: string) {
  const b = format(new Date(date), "PPP");
    return b;
}

return (
  <Link className="postContentMain" to={`/content/${id}`}>
    <div
      className={classnames({
        ["postContentLight"]: isLightTheme,
        ["postContentDark"]: !isLightTheme,
      })}
    >
      <div className="postImgBorder">
        <img src={image ? image : imgPost} className="postImg" />
        <div className="postImgBox"></div>
      </div>
      <div className="footerCard">
        <div
          className={classnames({
            ["postsDateLight"]: isLightTheme,
            ["postsDateDark"]: !isLightTheme,
          })}
        >
          {newDate(date)}
        </div>
        <div
          className={classnames({
            ["postsTextLight"]: isLightTheme,
            ["postsTextDark"]: !isLightTheme,
          })}
        >
          {text}
        </div>
      </div>
    </div>
  </Link>
);
        };

export default PostCard;