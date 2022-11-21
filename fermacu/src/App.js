import { theme } from "./theme";

//UI Material
import { ThemeProvider } from "@mui/material";

//React Router Dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import Appviewport from "./Components/Appviewport";

//Pages
import Home from "./Pages/Home"
import Quidditch from "./Pages/Projects/Quidditch";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Appviewport page={<Home/>}/>}/>
          <Route path="/quidditch" element={<Appviewport page={<Quidditch/>}/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
