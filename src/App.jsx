import "./App.css";
import { ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import MyNavbar from "./components/MyNavbar";
import About from "./pages/About";
import theme from "./theme";
function App() {
  return (
    <>
     <ThemeProvider theme={theme}>
       <MyNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
     </ThemeProvider>
     
    </>
  );
}

export default App;
