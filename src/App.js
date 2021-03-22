import React from "react";
import Routes from "./Routes/Routes";
import GlobalState from "./Global/GlobalState";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div>
      <GlobalStyle />
      <GlobalState>
        <Routes />
      </GlobalState>
    </div>
  );
}

export default App;
