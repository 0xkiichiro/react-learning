import { deepPurple, indigo, green } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <LoginPage/> */}
        <SignupPage />
      </ThemeProvider>
    </div>
  );
}
export default App;
