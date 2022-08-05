import React, {FC} from "react";
import './Button.css';
import {Theme, useThemeContext} from '../../context/themeModeContext';

type ButtonProps = {
    onClick?: (event: any) => void;
    className?: string;
    btnContent: any;
    disabled?: boolean;
    value?: any;
    active?: boolean;
  };
  

  const Button: FC<ButtonProps> = ({
    className,
    onClick,
    btnContent,
    disabled,
    value,
    active,
  }) => {
    const { theme } = useThemeContext();
    const isLightTheme = theme === Theme.Light;
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        value={value}
        className={`${className} ${active ? "active" : ""}`}
      >
        {btnContent}
      </button>
    );
  };


export default Button;