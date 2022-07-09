import * as React from 'react';
import {useState} from 'react';
import {CircularProgress} from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import UserService from "../service/UserService";
import './addNewPatient.css'

export const AddNewPatient = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [userDetails, setUserDetails] = useState({
        patientName: "",
        username: "",
        patientAddress: "",
        contactNumber: "",
        accountNumber: "",
        email: "",
        gender: "",
        password: "",
        bloodGroup: "",
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
        await UserService.registerNewPatient(userDetails).then(response => {
            if (response.status === 200) {
                setIsLoading(false)
                setUserDetails({
                    patientName: "",
                    username: "",
                    patientAddress: "",
                    contactNumber: "",
                    accountNumber: "",
                    email: "",
                    gender: "",
                    password: "",
                    bloodGroup: "",
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


    return (
        <>
            <form>
                <div className="row">
                    <div className={'columnLeft'}>
                        <div>
                            <label className={'patientFormText'}>Volledige naam patiënt</label> <br/>
                            <input onChange={e => handleUserDetails(e)}
                                   value={userDetails.patientName} name={'patientName'}
                                   type="text" className="addNewPatientFormControl"
                                   placeholder="Naam"/>

                        </div>
                        <div>
                            <label className={'patientFormText'}>Gebruikersnaam patiënt</label> <br/>
                            <input onChange={e => handleUserDetails(e)}
                                   value={userDetails.username} name={'username'}
                                   type="text" className="addNewPatientFormControl"
                                   placeholder="Gebruikersnaam patiënt"/>

                        </div>
                        <div>
                            <label className={'patientFormText'}>Adres</label> <br/>
                            <input onChange={e => handleUserDetails(e)}
                                   value={userDetails.patientAddress} name={'patientAddress'} type="email"
                                   className="addNewPatientFormControl"
                                   placeholder="Adres"/>
                        </div>
                        <div>
                            <label className={'patientFormText'}>Geslacht</label> <br/>
                            <input onChange={e => handleUserDetails(e)}
                                   value={userDetails.gender} name={'gender'} type="text"
                                   className="addNewPatientFormControl"
                                   placeholder="man | vrouw | anders"/>
                        </div>
                        <div>
                            <label className={'patientFormText'}>Email</label> <br/>
                            <input onChange={e => handleUserDetails(e)}
                                   value={userDetails.email} name={'email'} type="email"
                                   className="addNewPatientFormControl"
                                   placeholder="Email"/>
                        </div>
                    </div>
                    <div className="columnRight">
                        <div>
                            <label className={'patientFormText'}>Telefoonnummer</label> <br/>
                            <input onChange={e => handleUserDetails(e)}
                                   value={userDetails.contactNumber}
                                   name={"contactNumber"} type="text"
                                   className="addNewPatientFormControl"
                                   placeholder="Telefoonnummer"/>
                        </div>

                        <div>
                            <label className={'patientFormText'}>Rekeningnummer</label> <br/>
                            <input onChange={e => handleUserDetails(e)}
                                   value={userDetails.accountNumber}
                                   name={"accountNumber"} type="text"
                                   className="addNewPatientFormControl"
                                   placeholder="Rekeningnummer"/>
                        </div>
                        <div>
                            <label className={'patientFormText'}>Wachtwoord</label> <br/>
                            <input onChange={e => handleUserDetails(e)}
                                   value={userDetails.password} name={"password"}
                                   type="password" className="addNewPatientFormControl"
                                   placeholder="wachtwoord"/>
                        </div>

                        <div>
                            <label className={'patientFormText'}>Bloed type</label> <br/>
                            <input onChange={e => handleUserDetails(e)}
                                   value={userDetails.bloodGroup} name={"bloodGroup"}
                                   type="text" className="addNewPatientFormControl"
                                   placeholder="bloedtype"/>

                        </div>
                    </div>
                </div>
                <div className="containerAddNewBtn">
                    <div>
                        {errorMessage !== '' && <b style={{color: 'red'}}>{errorMessage}</b>}
                    </div>
                    <button  onClick={handleRegisterSubmit} type="button"
                            className="addNewPatientBtn">
                        {isLoading ? <CircularProgress/> : <b>Patiënt toevoegen</b>}
                    </button>
                </div>
            </form>
            {
                showToast &&
                <Snackbar
                    open={showToast}
                    autoHideDuration={2000}
                    onClose={handleClose}
                    message="Request to Admin for Approval"
                />
            }
        </>
    )
}
