import React, { FC } from "react";
import classnames from "classnames";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import "./Tabs.css";


type TabsProps = {};

const Tabs: FC<TabsProps> = ({}: any) => {
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
  return (
    <div
      className={classnames({
        ["TabMainBoxLight"]: isLightTheme,
        ["TabMainBoxDark"]: !isLightTheme,
      })}
    >
      <div
        className={classnames({
          ["TabBoxLight"]: isLightTheme,
          ["TabBoxDark"]: !isLightTheme,
        })}
      >
        Articles
      </div>
      <div
        className={classnames({
          ["TabBoxLight"]: isLightTheme,
          ["TabBoxDark"]: !isLightTheme,
        })}
      >
        News
      </div>
    </div>
  );
};

export default Tabs;