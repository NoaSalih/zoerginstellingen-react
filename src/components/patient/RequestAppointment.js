import * as React from "react";
import {CircularProgress} from "@mui/material";
import {useState} from "react";
import UserService from "../service/UserService";
import './requestAppointment.css'

export default function RequestAppointment(){
    const [errorMessage, setErrorMessage] = useState('')
    const [isLoading, setLoading] = useState('')
    const [appointment, setAppointment] = useState({
        appointmentDescription: ""
    });

    const handleChangeAppointmentData = (event) => {
        setErrorMessage('')
        let value = event.target.value
        setAppointment({...appointment, [event.target.name]: value});
    }
    const handleRegisterSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        await UserService.applyForAppointment(appointment).then(res=> {
            console.log("Afspraak bevestigd", res.data)
            setLoading(false)
        }).catch(er=> {
            console.log(er)
            setLoading(false)
        })
    }


    return (
        <>
            <br/><br/><br/>
            <div className="container">
                <h3>Vul hier waarvoor u afspraak wilt maken</h3>
                <form>
                    <div className="row">
                        <div >
                            <div className="mainBox">
                                <label className={'labelText'}>Afspraak beschrijving</label>
                                <textarea onChange={e => handleChangeAppointmentData(e)}
                                          value={appointment.appointmentDescription} name={'appointmentDescription'}
                                          className="textAreaForReason"
                                          placeholder="Vul hier uw beschrijving"/>
                            </div>
                        </div>
                    </div>
                    <div >
                        {errorMessage !== '' &&
                            <b style={{color: 'red'}}>{errorMessage}</b>}
                    </div>
                    <button onClick={(e)=> handleRegisterSubmit(e)} type="button"
                            className="requestBtn">
                        {isLoading ? <CircularProgress/> : <b>Afspraak bevestigen</b>}
                    </button>
                </form>
            </div>
        </>
    )
}