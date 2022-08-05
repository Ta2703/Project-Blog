import React, {FC, FocusEventHandler} from "react";
import classnames from "classnames";
import { Theme, useThemeContext } from '../../context/themeModeContext';
import './Footer.css';
import Toggle from '../Toggle';

type FooterProps = {};

const Footer: FC<FooterProps> = ({}: any) => {
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
  return (
    <div
      className={classnames({
        ["MainContainerFooterLight"]: isLightTheme,
        ["MainContainerFooterDark"]: !isLightTheme,
      })}
    >
      <div className="FooterCopywriter">© 2022 Blogolog</div>
      <div className="FooterCheckBox">
        <div className="FooterCheckBoxTitle">Dark theme</div>
        <div className="FooterCheckBoxButton">
            <Toggle />
        </div>
        </div>
      </div>
  );
};

export default Footer;