import * as React from "react";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import UserService from "../service/UserService";
import  './patientAppointment.css'

export default function PatientAppointment(){
    const [appointments, setAppointments] = useState([])
    const [error, setError] = useState("")
    useEffect(()=> {
        UserService.getAllPatientAppointments().then(res=> {
            setAppointments(res.data)
        }).catch(err=> {
            setError(err.response.message)
        })
    })

    return (
        <>
            <br/><br/><br/>
            <div className="container">
                <Link to={"/request-appointment"}><button className="btnApplyForAppointment">Afspraak maken</button></Link>
                {error && <h3>{error}</h3>}
                <table className="tableDoctorAppointment">
                    <thead>
                    <th>ID</th>
                    <th>Datum afspraak</th>
                    <th>Naam Doctor</th>
                    <th>Afspraak beschrijving</th>
                    <th>Status afspraak</th>
                    </thead>
                    <tbody >
                    {
                        appointments.map(appoint=> {
                            return (
                                <tr key={appoint.id}>
                                    <td>{appoint.id}</td>
                                    <td>{appoint.appointmentDate}</td>
                                    <td>{appoint.doctorName}</td>
                                    <td>{appoint.appointmentDescription}</td>
                                    <td>{appoint.appointmentStatus}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}