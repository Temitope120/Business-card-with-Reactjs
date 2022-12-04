import React from "react";
import cardOwner from "../images/card-user.avif";

export default function TopBar() {
    return (
        <img src={cardOwner} alt="user image" className="user" />
    )
}