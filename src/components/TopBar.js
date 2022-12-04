import React from "react";
// import cardOwner from "../images/card-user.avif";
import image from "../images/me.jpeg";

export default function TopBar() {
    return (
        <img src={image} alt="user image" className="user" />
    )
}