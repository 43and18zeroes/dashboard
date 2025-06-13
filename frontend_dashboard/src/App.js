import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, Themeprovider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <Themeprovider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content"></main>
        </div>
      </Themeprovider>
    </ColorModeContext.Provider>
  );
}

export default App;
