import * as React from "react";
import {Link} from "react-router-dom";
import {CircularProgress} from "@mui/material";
import {useState} from "react";
import './editProfile.css'

export default function EditProfile() {
    const [errorMessage, setErrorMessage] = useState('')
    const [userRole, setRole] = useState('');

    const [userDetails, setUserDetails] = useState({
        email: null,
        contactNumber: null,
        username: null,
        hostelNumber: null,
        accountNumber: null,
        password: null,
        roomNumber: null,
        role: userRole
    });


    const [isLoading, setIsLoading] = useState(false);

    const handleUserDetails = (event) => {
        setErrorMessage('')
        setRole("ADMIN")
        setIsLoading(false)
        let value = event.target.value
        setUserDetails({...userDetails, [event.target.name]: value, role: userRole});
    }
    const handleRegisterSubmit = async (e) => {
        e.preventDefault()
        return true
    }
    return (
        <>
            <br/><br/><br/>
            <div className="container">
                <div>
                    <span className={"textSpan"}>Uw gegevens bijwerken</span><br/>
                    <button className="btnCancel"><Link className={"text-white"} to={"/"}>Annuleren</Link></button>
                </div>
                <form>
                    <div className="formData">
                        <div>
                            <div>
                                <label className={'labelText'}>Naam</label>
                                <input onChange={e => handleUserDetails(e)}
                                       value={userDetails.username} name={'username'}
                                       type="text" className="form-control-edit-profile"
                                       placeholder="naam"/>
                            </div>
                            <div>
                                <label className={'labelText'}>Email</label>

                                <input onChange={e => handleUserDetails(e)}
                                       value={userDetails.email} name={'email'} type="email"
                                       className="form-control-edit-profile"
                                       placeholder="Email"/>
                            </div>
                            <div>
                                <label className={'labelText'}>Telefoonnummer</label>

                                <input onChange={e => handleUserDetails(e)}
                                       value={userDetails.contactNumber}
                                       name={"contactNumber"} type="text"
                                       className="form-control-edit-profile"
                                       placeholder="Telefoonnummer"/>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label className={'labelText'}>Password</label>

                                <input onChange={e => handleUserDetails(e)}
                                       value={userDetails.password} name={"password"}
                                       type="password" className="form-control-edit-profile"
                                       placeholder="wachtwoord"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            {errorMessage !== '' &&
                                <b style={{color: 'red'}}>{errorMessage}</b>}
                        </div>
                        <button className={'updateBtn'} onClick={handleRegisterSubmit} type="button">
                            {isLoading ? <CircularProgress/> : <b>Gegevens bijwerken</b>}
                        </button>
                    </div>
                </form>

            </div>

        </>
    )
}