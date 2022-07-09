import {Link} from "react-router-dom";
import * as React from "react";
import './welcome.css'
import homeImage from '../../assets/img/home.png'

export const Welcome = () => {
    return (
        <>
            <br/><br/>
            <div className="containerWelcome">
                <div className="left-column">
                    <h3 className={"titel"}>Welkom bij de hoofdpagina van zorgaanbieders.nu</h3>
                    <Link to={"/profile"}>
                        <button className="profile-btn">
                            Mijn profiel
                        </button>
                    </Link>
                </div>
                <div className="right-column">
                    <img className="right-column" src={homeImage} alt=""/>
                </div>
            </div>
            <footer/>
        </>
    )
}
