import * as React from "react";
import {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import UserService from "../service/UserService";
import './Patient.css'

export default function AllPatients(){
    const [patients, setPatients] = useState([])
    const [error, setError] = useState("")
    const fetchPatients = async () => {
        await UserService.doctorPatients().then(res=> {
            setPatients(res.data)
            setError("")
        }).catch(err=> {
            setError(err.response.message)
        })
    }
    useEffect(()=> {
        fetchPatients()
    }, [])



    return (
        <>
            <br/><br/><br/>
            <div className="container">
                <Link to={'/add-new-patient'}><button className="btnAddPatient">Patiënt toevoegen</button></Link>
                {error && <h3>{error}</h3>}
                <table className="tableAllPatient">
                    <thead>
                    <th>ID</th>
                    <th>Naam patiënt</th>
                    <th>Bloed type</th>
                    <th>telefoonnummer</th>
                    <th>Email</th>
                    <th>Adres</th>
                    <th>Naam doctor</th>
                    </thead>
                    <tbody className="tbody">
                    {
                        patients.map(patient=> {
                            return (
                                <tr key={patient.id}>
                                    <td>{patient.id}</td>
                                    <td>{patient.patientName}</td>
                                    <td>{patient.bloodGroup}</td>
                                    <td>{patient.contactNumber}</td>
                                    <td>{patient.email}</td>
                                    <td>{patient.patientAddress}</td>
                                    <td>{patient.doctorName}</td>
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