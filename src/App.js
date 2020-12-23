import { useState } from "react";
import './App.css';
import Head from "./components/Head";
import Body from "./components/Body";
import { ThemeProvider } from "styled-components";

const LightTheme = {
    headBackground: "#ffffff",
    pageBackground: "#FAFAFA",
    titleColor: "#111518"
}

const DarkTheme = {
    headBackground: "#2B3743",
    pageBackground: "#202D36",
    titleColor: "#fff"
}

const themes = {
    light: LightTheme,
    dark: DarkTheme
}

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={themes[theme]}>
      <div className="App">
        <Head theme={theme} setTheme={setTheme} />
        <Body theme={theme} setTheme={setTheme} />        
      </div>
    </ThemeProvider>
  );
}

export default App;
