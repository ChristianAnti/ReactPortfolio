import React, {useEffect} from "react";
// import "./styles/App.css";
import Portfolio from "./components/Portfolio";


function App() {
  useEffect(() => {
    document.querySelector("#root").classList.add("container")
  }, [])
  return <Portfolio />
}

export default App;