import React, { useState } from "react";
// remember to style later 
// import 



export default function Contact() {
    function validateEmail(email) {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === "email") {
            setEmail(inputValue);
            const isValid = validateEmail(inputValue);
            if (!isValid) {
                setErrorMessage("Invalid Email friend maybe something else");
            } else {
                setErrorMessage("");
                setEmail(inputValue);
            }
        } else if (inputType === "name") {
            if (!inputValue.length) {
                setName(inputValue);
                setErrorMessage(`${inputType} required`);
            } else {
                setErrorMessage("");
                setName(inputValue);
            }
        } else if (inputType === "message") {
            if (!inputValue.length) {
                setMessage(inputValue);
                setErrorMessage(`${inputType} required`);
            } else {
                setErrorMessage("");
                setMessage(inputValue);
            }
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <section className="container contact-me-container">
            <h2>Contact Me</h2>
            <form className="form">
                <div className="row">              
                    <div className="form-group col-lg-6">
                        <label htmlFor="nameInput">Name:</label>
                        <br></br>
                        <input
                            className="form-control"
                            id="nameInput"
                            value={name}
                            name="name"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Your name"
                        />
                    </div>
                </div>  

                <div className="row">
                    <div className="form-group col-lg-6">
                        <label htmlFor="emailInput">Email address:</label>
                        <br></br>
                        <input
                            className="form-control"
                            id="emailInput"
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            type="email"
                            placeholder="Your email"
                        />
                    </div>
                </div>              

                <div className="form-group">
                    <label htmlFor="messageInput">Message:</label>
                    <br></br>
                    <textarea
                        className="form-control"
                        id="messageInput"
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Say hello!"
                    ></textarea>
                    <br></br>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="button" onClick={handleFormSubmit} className="btn btn-primary">
                    Submit
                </button>
            </form>
        </section>
    );
}

