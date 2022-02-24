import React from "react";
// remember to style later 
// import 
//ill have to import my resume as a pdf or text document or something 
import Pdf from "../../assets/ResumeChristianGleason2022.pdf"

export default function Resume(){

    return (
        <object className='d-flex justiy-content-center flex-column' data={Pdf} type="application/pdf" width="100%" height="100%">
            <p className='text-center'>External link to <a href={Pdf}>to the PDF</a></p>
        </object>
    )
}