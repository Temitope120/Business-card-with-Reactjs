import React from "react";
export default function CardBody() {
    return (
        <div className="card-body">
            <div className="profile">
                <h3 className="name"> Laura Smith</h3>
                <span>
                    Frontend Developer
                </span>

            </div>
            <div className="flex">
                <button> Email</button>
                <button> LinkedIn</button>
            </div>

            <h4 className="white-text">About</h4>
            <p className="body"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"</p>

            <h4 className="white-text">Interest</h4>
            <p className="body"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"</p>

        </div>
    )
}