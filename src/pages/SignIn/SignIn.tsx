import React, { FC, useEffect} from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Theme, useThemeContext} from "../../context/themeModeContext";
import classnames from "classnames";
import { NavLink, useNavigate } from "react-router-dom";
import "./SignIn.css";

type SignInProps = {};

const SignIn: FC<SignInProps> = ({}: any) => {
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
  const navigate = useNavigate();
  const auth = localStorage.getItem("authToken");
  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, []);
  const handleLogin = () => {
    localStorage.setItem("authToken", "123");
    navigate("/");
  };
  return (
    <div
      className={classnames({
        ["MainContainerLight"]: isLightTheme,
        ["MainContainerDark"]: !isLightTheme,
      })}
    >
      <div
        className={classnames({
          ["SignInTitleLight"]: isLightTheme,
          ["SignInTitleDark"]: !isLightTheme,
        })}
      >
        Sign In
      </div>
      <div
        className={classnames({
          ["SignInBoxLight"]: isLightTheme,
          ["SignInBoxDark"]: !isLightTheme,
        })}
      >
        <div
          className={classnames({
            ["SignInEmailLight"]: isLightTheme,
            ["SignInEmailDark"]: !isLightTheme,
          })}
        >
          <div>Email</div>
          <Input
            type="text"
            className="SignInEmailInput"
            placeholder="Your email"
          ></Input>
        </div>
        <div
          className={classnames({
            ["SignInEPasswordLight"]: isLightTheme,
            ["SignInEPasswordDark"]: !isLightTheme,
          })}
        >
          <div>Password</div>
          <Input
            type="password"
            className="SignInPasswordInput"
            placeholder="Your password"
          ></Input>
        </div>
        <div
          className={classnames({
            ["SignInForgotLight"]: isLightTheme,
            ["SignInForgotDark"]: !isLightTheme,
          })}
        >
          Forgot password?
        </div>
        <div className="SignInButtonBlock">
          <Button
            onClick={handleLogin}
            btnContent={"Sign In"}
            className=" button_primary SignInButton"
          />
        </div>
        <div
          className={classnames({
            ["SignInSignUpLight"]: isLightTheme,
            ["SignInSignUpDark"]: !isLightTheme,
          })}
        >
          <span>Don’t have an account?</span>
          <span
            className={classnames({
              ["SignInSignUpLinkLight"]: isLightTheme,
              ["SignInSignUpLinkDark"]: !isLightTheme,
            })}
          >
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;