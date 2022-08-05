import React , {FC} from "react";
import { Theme, useThemeContext} from "../../context/themeModeContext";
import classnames from "classnames";
import "./Input.css";

type InputProps = {
    type: string;
    disabled?: boolean;
    className?: string;
    placeholder?: string;
  };
  
  const Input: FC<InputProps> = ({
    type,
    disabled,
    className,
    placeholder,
  }: any) => {
    const { theme } = useThemeContext();
    const isLightTheme = theme === Theme.Light;
  
    return (
      <input
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        className={classnames({
          ["InputLight"]: isLightTheme,
          ["InputDark"]: !isLightTheme,
        })}
      />
    );
  };
  
  export default Input;