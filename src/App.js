import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Head from "./components/Head";
import Home from "./components/Home";
import CountryDetail from "./components/CountryDetail";
import { ThemeProvider } from "styled-components";

const LightTheme = {
    headBackground: "#ffffff",
    pageBackground: "#FAFAFA",
    titleColor: "#111518"
}

const DarkTheme = {
    headBackground: "#2B3743",
    pageBackground: "#202D36",
    cardBackground: "#ffffff",
    titleColor: "#fff"
}

const themes = {
    light: LightTheme,
    dark: DarkTheme
}

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <Router>
      <ThemeProvider theme={themes[theme]}>
        <div className="App">
          <Head theme={theme} setTheme={setTheme} />
          <Route path="/" exact component={Home} />
          <Route path="/country/:id" component={CountryDetail} />                  
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
