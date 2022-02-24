import React, {useEffect} from "react";
// import "./styles/App.css";
import Portfolio from "./components/Portfolio";


function App() {
  useEffect(() => {
    if (!document.querySelector("#root").classList.contains('container')) {  // to prevent infinite rerendering of the component
      document.querySelector("#root").classList.add("container")
    }    
  }, [])
  return <Portfolio />
}

export default App;