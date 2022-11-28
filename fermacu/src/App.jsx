import { theme } from "./theme";

//UI Material
import { ThemeProvider } from "@mui/material";

//React Router Dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import Appviewport from "./Components/Appviewport";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Appviewport/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
