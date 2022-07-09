import * as React from "react";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import UserService from "../service/UserService";
import './manageAppiontments.css'

export default function ManageAppointments(){
    const [error, setError] = useState("")
    const [appointments, setAppointments] = useState([])
    useEffect(()=> {
        UserService.getAllAppointments().then(res=> {
            setAppointments(res.data)
        }).catch(err=> {
            setError(err.response.message)
        })
    }, [])

    return (
        <>
            <br/><br/><br/>
            <div className="container">
                {error && <h3>{error}</h3>}
                <table className="tableAllPatient">
                    <thead className={"tableManageAppointments"}>
                    <th>ID</th>
                    <th>Naam patient</th>
                    <th>Beschrijving</th>
                    <th>Datum afspraak</th>
                    <th>Status</th>
                    <th>Bewerken</th>
                    </thead>
                    <tbody className="tbody">
                    {
                        appointments.map(appoint=> {
                            return (
                                <tr key={appoint.id}>
                                    <td>{appoint.id}</td>
                                    <td>{appoint.patientName}</td>
                                    <td>{appoint.appointmentDescription}</td>
                                    <td>{appoint.appointmentDate}</td>
                                    <td>{appoint.appointmentStatus}</td>
                                    <td>
                                        <DeleteIcon className={"DeleteIcon"}/>
                                        <Link   to={"/update-appointment"}><CheckCircleIcon /></Link>
                                    </td>
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