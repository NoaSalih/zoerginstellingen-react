import * as React from 'react';
import {useState} from 'react';
import {Link} from "react-router-dom";
import {CircularProgress} from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import UserService from "../service/UserService";
import './register.css'

export const Register = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [userDetails, setUserDetails] = useState({
        username: "",
        active: true,
        qualification: "",
        userDescription: "",
        contactNumber: "",
        accountNumber: "",
        email: "",
        gender: "",
        password: "",
    });


    const [isLoading, setIsLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowToast(false);
    };

    const handleUserDetails = (event) => {
        setErrorMessage('')
        setIsLoading(false)
        let value = event.target.value
        setUserDetails({...userDetails, [event.target.name]: value});
    }
    const handleRegisterSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        await UserService.registerNewUser(userDetails).then(response => {
            if (response.status === 200) {
                setIsLoading(false)
                setUserDetails({
                    username: "",
                    active: true,
                    qualification: "",
                    userDescription: "",
                    contactNumber: "",
                    accountNumber: "",
                    email: "",
                    gender: "",
                    password: "",
                })
                setShowToast(true)
                setErrorMessage('')
                window.location.href = "/"
            }
        }).catch(err => {
            console.log(err.response)
            setIsLoading(false)
            setErrorMessage(err.response.data)
        })
    }


    return (<>
        <div className="container">
            <div className="registrationWelcome">
                <h3>Welkom bij de registratiepagina</h3>
                <p>Vul hieronder uw gegevens om te registreren</p>
                <p>U kunt registreren als: <span>Doctor</span></p>
            </div>
            <hr width={'50%'}/>
            <div>
                <form>
                    <div className="row">
                        <div className="columnLeft">
                            <div className="mb-3">
                                <label className={'FormText'}>Gebruikersnaam</label><br/>
                                <input onChange={e => handleUserDetails(e)}
                                       value={userDetails.username} name={'username'}
                                       type="text" className="FormControl"
                                       placeholder="Naam"/>
                            </div>
                            <div className="mb-3">
                                <label className={'FormText'}>Kwalificatie</label><br/>
                                <input onChange={e => handleUserDetails(e)}
                                       value={userDetails.qualification} name={'qualification'} type="email"
                                       className="FormControl"
                                       placeholder="Kwalificatie"/>
                            </div>
                            <div className="mb-3">
                                <label className={'FormText'}>Geslacht</label><br/>
                                <input onChange={e => handleUserDetails(e)}
                                       value={userDetails.gender} name={'gender'} type="text"
                                       className="FormControl"
                                       placeholder="man | vrouw | anders"/>
                            </div>
                            <div className="mb-3">
                                <label className={'FormText'}>Email</label><br/>
                                <input onChange={e => handleUserDetails(e)}
                                       value={userDetails.email} name={'email'} type="email"
                                       className="FormControl"
                                       placeholder="Email"/>
                            </div>
                        </div>
                        <div className="columnRight">
                            <div className="mb-3">
                                <label className={'FormText'}>Telefoonnummer</label><br/>
                                <input onChange={e => handleUserDetails(e)}
                                       value={userDetails.contactNumber}
                                       name={"contactNumber"} type="text"
                                       className="FormControl"
                                       placeholder="Telefoonnummer"/>
                            </div>

                            <div className="mb-3">
                                <label className={'FormText'}>Rekening nummer</label><br/>
                                <input onChange={e => handleUserDetails(e)}
                                       value={userDetails.accountNumber}
                                       name={"accountNumber"} type="text"
                                       className="FormControl"
                                       placeholder="Rekening nummer"/>
                            </div>
                            <div className="mb-3">
                                <label className={'FormText'}>Wachtwoord</label><br/>
                                <input onChange={e => handleUserDetails(e)}
                                       value={userDetails.password} name={"password"}
                                       type="password" className="FormControl"
                                       placeholder="Wachtwoord"/>
                            </div>
                            <div className="mb-3">
                                <label className={'FormText'}>Uw functie</label><br/><br/>
                                <div className="btn-group" role="group"
                                     aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="roleId" id="btnradio1"
                                           autoComplete="off" value="1" checked/>
                                    <label className="btn btn-outline-dark"
                                           htmlFor="btn radio1">Doctor</label><br/>
                                </div>
                            </div>
                        </div>
                        <div className="TextAreaField" style={{width: '90vw'}}>
                            <div className="mb-3">
                                <label className={'FormText'}>Schrijf hier iets over uzelf, voor meer informatie
                                    naar uw patiënten</label><br/>
                                <textarea onChange={e => handleUserDetails(e)}
                                          value={userDetails.userDescription} name={"userDescription"}
                                          className="FormControl" style={{width: '100%'}}
                                          placeholder="Over uzelf"/>
                            </div>
                        </div>

                    </div>
                    <div className={'errorMsgRegistration'}>
                        <div className="text-center">
                            {errorMessage !== '' && <b style={{color: 'red'}}>{errorMessage}</b>}
                        </div>
                        <button onClick={handleRegisterSubmit} type="button"
                                className="addNewPatientBtnRegistration">
                            {isLoading ? <CircularProgress/> : <b>Registreren</b>}
                        </button>
                    </div>
                    <p className="signUpTextRegistration">Heeft u al een account? <Link
                        to={"/login"} style={{color: 'black'}} className={'LinkTag'}>U kunt hier Inloggen</Link>
                    </p>
                </form>
            </div>
        </div>
        {showToast && <Snackbar
            open={showToast}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Neem contact met Admin voor bevestiging"
        />}
    </>)
}
