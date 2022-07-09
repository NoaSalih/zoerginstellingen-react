import * as React from "react";
import {useState} from "react";
import {CircularProgress} from "@mui/material";
import {Link} from "react-router-dom";
import UserService from "../../service/UserService";
import home from '../../../assets/img/home.png'
import './login.css'

export const Login = () => {


    const [userDetails, setUserDetails] = useState({
        username: '', password: '',
    });
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [loginFailed, setLoginFailed] = useState(false);

    const handleUserDetails = (event) => {
        setIsLoading(false)
        setLoginFailed(false)
        let value = ''
        if (event.target.name === 'password') {
            //naar base64 voor AES-security
            value = btoa(event.target.value);
        } else {
            value = event.target.value
        }
        setUserDetails({...userDetails, [event.target.name]: value});
    }
    const handleRegisterSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        await UserService.handleLogin(userDetails).then(response => {
            setIsLoading(true)
            if (response.status === 200) {
                setIsLoading(false)
                console.log("Login Success", response.data[0])
                sessionStorage.setItem("user", JSON.stringify(response.data[0]))
                window.location.href = "/"
            } else {
                setLoginFailed(true)
                setError("Onbekend fout opgetreden")
                setIsLoading(false)
            }
        }).catch(err => {
            setIsLoading(false)
            setLoginFailed(true)
            console.log(err.message)
        })
    }

    return (<>
        <div className="containerLogin">
            <div>
                <div>
                    <h3 className={"welcomeLogin"}>Welkom bij<br/>
                        Zorginstellingen.nu</h3>
                    <p className={'welcomeTextLogin'}>Vul hieronder uw gegevens om verder te gaan</p>
                </div>
                <div>
                    <form>
                        <label className={'usernameTextLogin'}>Gebruikersnaam</label>
                        <div>
                            <input className={'textFieldLogin'} name={"username"}
                                   onChange={(e) => handleUserDetails(e)}
                                   type="text" placeholder="naam"/>
                        </div>
                        <label className={'passwordTextLogin'}>Wachtwoord</label>
                        <div>
                            <input className={"passwordTextFieldLogin"} name={"password"}

                                   onChange={(e) => handleUserDetails(e)}
                                   type="password"
                                   placeholder="wachtwoord"/>
                        </div>
                        <div className={'errorMsgLogin'}>
                            {loginFailed === true ?
                                <b style={{color: 'red'}}>Gebruikersnaam en of wachtwoord onjuist</b> : ""}
                        </div>
                        <div>
                            {error && <h6>{error}</h6>}
                            <button className={'signInBtnLogin'} type="button"
                                    onClick={(e) => handleRegisterSubmit(e)}>
                                {isLoading ? <CircularProgress/> : <b>Inloggen</b>}
                            </button>
                        </div>
                    </form>
                </div>
                <div>
                    <p className={'signUpTextLogin'}>
                        Nog geen account?
                        <Link className={'LinkSignup'}
                              to="/register">Hier kunt u registreren</Link>
                    </p>
                </div>
            </div>

            <div>
                <img className={'imgLogin'} src={home} alt="loginImg"/>
            </div>
        </div>
        <footer/>
    </>)
}