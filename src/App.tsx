import React from "react";
import DesktopRoutes from "./routes/DesktopRoutes";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    color:#333;
    margin:0;
    padding:0;
    h1,h2,h3,h4,h5,h6{
      margin:0;
      padding:0;
    }
    ul,li{
      padding:0;
      margin:0;
    }
    a{
      text-decoration:none;
      &:active{
        color:none;
      }
    }
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <DesktopRoutes />
    </>
  );
};

export default App;
