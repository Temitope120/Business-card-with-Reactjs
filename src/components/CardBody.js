import React from "react";
export default function CardBody() {
    return (
        <div className="card-body">
            <div className="profile">
                <h3 className="name"> Funminiyi Adedoyin</h3>
                <p className="role">
                    Frontend Developer
                </p>

                <p>
                <a href="https://github.com/Temitope120" target="_blank">github.com/Temitope120 </a>
                </p>

            </div>
            <div className="flex">
                <button type="button"> <a href= "mailto:doyinfummi2012@gmail.com" className="email" target="_blank"> Email</a></button>
                <button type="button"> LinkedIn</button>
            </div>

            <h4 className="white-text">About</h4>
            <p className="body"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"</p>

            <h4 className="white-text">Interest</h4>
            <p className="body"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"</p>

        </div>
    )
}