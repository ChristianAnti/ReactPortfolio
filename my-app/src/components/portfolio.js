import React, { useState } from "react";
import aboutMe from "./pages/aboutMe";
import myWork from "./pages/myWork";
import contactMe from "./pages/contactMe";


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState("aboutMe");


    const renderPage = () => {
        if (currentPage === "aboutMe") {
            return <aboutMe/>;
        }else if (currentPage === "aboutMe") {
            return <aboutMe/>;
        }else if (currentPage === "aboutMe") {
            return <aboutMe/>;
        }else if (currentPage === "aboutMe") {
            return <aboutMe/>;
        }
    }

}