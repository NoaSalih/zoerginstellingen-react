import * as React from "react";
import {useEffect, useState} from "react";
import UserService from "../service/UserService";
import './Appointments.css'

export default function Appointments() {
    const [error, setError] = useState("")
    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        UserService.getAllAppointments().then(res => {
            setAppointments(res.data)
        }).catch(err => {
            setError(err.response.message)
        })
    }, [])

    return (
        <>
            <br/><br/><br/>
            {error && <h3>{error}</h3>}
            <div className="container">
                <table className="tableAllAppointments">
                    <thead>
                    <th>ID</th>
                    <th>Naam Doctor</th>
                    <th>Naam patiënt</th>
                    <th>Klacht beschrijving</th>
                    <th>Status afspraak</th>
                    </thead>
                    <tbody>
                    {
                        appointments.map(appointment => {
                            return (
                                <tr key={appointment.id}>
                                    <td>{appointment.id}</td>
                                    <td>{appointment.doctorName}</td>
                                    <td>{appointment.patientName}</td>
                                    <td>{appointment.appointmentDescription}</td>
                                    <td>{appointment.appointmentStatus}</td>
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