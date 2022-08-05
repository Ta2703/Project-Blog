import React, { useState} from "react";
import "./App.css";
import { ThemeModeProvider } from "./context/ThemeModeProvider";
import { Theme} from "./context/themeModeContext";
import classnames from "classnames";
import Router from "./pages/Router";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import store from "./redux/store";

function App() {
  const [theme, setTheme] = useState<Theme>(Theme.Light);

  const onChangeTheme = (value: Theme) => {
    setTheme(value);
  };
  const isLightTheme = theme === Theme.Light;
  return (
    <Provider store={store}>
    <ThemeModeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <div
        className={classnames({
          ["App"]: isLightTheme,
          ["AppDark"]: !isLightTheme,
        })}
      >
        <Router />
      </div>
    </ThemeModeProvider>
    </Provider>
  );
}


// function App() {
//   const [theme, setTheme] = useState<Theme>(Theme.Light);
//   const onChangeTheme = (value: Theme) => {
//     setTheme(value);
//   };
//   const isLightTheme = theme === Theme.Light;
//   return (
//       <Provider store={store}>
//     <ThemeModeProvider theme={theme} onChangeTheme={onChangeTheme}>
//       <div
//         className={classnames({
//           ["App"]: isLightTheme,
//           ["AppDark"]: !isLightTheme,
//         })}
//       >
//         <Router />
//       </div>
//     </ThemeModeProvider>
//       </Provider> 
// )}
export default App;