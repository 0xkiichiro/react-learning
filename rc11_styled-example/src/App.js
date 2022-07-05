import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";

const theme = {
  colors: {
    header: "hsl(252, 51%, 23%)",
    body: "hsl(252, 51%, 23%)",
    footer: "gold",
  },
  responsive: "768px",
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
};

export default App;
