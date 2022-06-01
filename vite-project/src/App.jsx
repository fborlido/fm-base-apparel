import React, { useState } from "react";
import Logo from "./images/logo.svg";
import icon from "./images/icon-arrow.svg";
import Mobile from "./images/hero-mobile.jpg";
import Desktop from "./images/hero-desktop.jpg";

import useWindowSize from "./useWindowSize";

import "./App.scss";

const App = () => {
    const { width } = useWindowSize();

    const [emailText, setEmailText] = useState("");
    const [errorText, setErrorText] = useState(null);

    const submitFn = (e) => {
        e.preventDefault();
        let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (emailText === "") {
            setErrorText("Email can't be empty");
        } else if (!emailPattern.test(emailText)) {
            setErrorText("Email not valid.");
        } else {
            setErrorText(null);
            alert("Succes");
        }
    };

    return (
        <main>
            <div className="header">
                <img src={Logo} alt="" />
            </div>
            <div className="picture">
                <img src={width < 600 ? Mobile : Desktop} alt="" />
            </div>
            <div className="content">
                <h1>
                    <span>We're</span>
                    <br />
                    Coming
                    <br />
                    soon
                </h1>
                <p>
                    Hello fellow shoppers! We're currently building our new
                    fashion store. Add your email below to stay up-to-date with
                    announcements and our launch deals.
                </p>
                <form action="" noValidate onSubmit={submitFn}>
                    <div
                        className={
                            "control " + (errorText !== null && "control-error")
                        }
                    >
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={emailText}
                            placeholder="Email Address"
                            onChange={(e) => setEmailText(e.target.value)}
                        />
                        {errorText !== null && (
                            <p className="error">{errorText}</p>
                        )}
                        <button type="submit">
                            <img src={icon} alt="" />
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default App;
