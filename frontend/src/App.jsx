import { RouterProvider } from "react-router-dom";
import router from "./config/router";
import StyleThemeProvider from "./theme/ThemeProvider";
import { SnackbarProvider } from "notistack";
import { Context } from "./context/Context";

function App() {
  return (
    <>
      <Context.Provider value={true}>
        <StyleThemeProvider>
          <SnackbarProvider maxSnack={3} autoHideDuration={5000}>
            <RouterProvider router={router} />
          </SnackbarProvider>
        </StyleThemeProvider>
      </Context.Provider>
    </>
  );
}

export default App;
