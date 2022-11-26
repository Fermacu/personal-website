import { theme } from "./theme";

//UI Material
import { ThemeProvider } from "@mui/material";

//React Router Dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import Appviewport from "./Components/Appviewport";

<<<<<<< Updated upstream:fermacu/src/App.js
=======
//Pages
import Home from "./Pages/Home"
import Quidditch from "./Pages/Projects/Quidditch";
import AboutMe from "./Pages/AboutMe";

>>>>>>> Stashed changes:fermacu/src/App.jsx
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
<<<<<<< Updated upstream:fermacu/src/App.js
          <Route path="/" element={<Appviewport/>}/>
=======
          <Route path="/" element={<Appviewport page={<Home/>}/>}/>
          <Route path="/about" element={<Appviewport page={<AboutMe/>}/>}/>
          <Route path="/quidditch" element={<Appviewport page={<Quidditch/>}/>}/>
>>>>>>> Stashed changes:fermacu/src/App.jsx
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
