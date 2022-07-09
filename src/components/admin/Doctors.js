import * as React from "react";
import {useEffect, useState} from "react";
import {APIs} from "../apis/APIs";
import axios from "axios";
import './Doctors.css'

export default function Doctors(){
    const [doctors, setDoctors] = useState([])
    const fetchDoctors = async () => {
        let filterDoc = []
        await axios.get(APIs.USER.GET_ALL_USERS).then(res=> {
            res.data.forEach(user=> {
                if (user.role.roleName === "DOCTOR"){
                    filterDoc.push(user)
                }
            })
            console.log(filterDoc)
            setDoctors(filterDoc)
        }).catch(err=> {
            console.log(err.response.message)
        })
    }
    useEffect(()=> {
        fetchDoctors()
    }, [])

    return (
        <>
            <br/><br/><br/>
            <div className="container">
                <table className="tableAllDoctors">
                    <thead className={"tableAllDoctors"}  >
                    <th>ID</th>
                    <th>Naam</th>
                    <th>Email</th>
                    <th>Telefoonnummer</th>
                    <th>Specialisatie</th>
                    <th>Rol</th>
                    </thead>
                    <tbody className="tbody">
                    {
                        doctors.map(doctor=> {
                            return <>
                                <tr key={doctor.id}>
                                    <td>{doctor.id}</td>
                                    <td>{doctor.username}</td>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.contactNumber}</td>
                                    <td>{doctor.qualification}</td>
                                    <td>{doctor.role.roleName}</td>
                                </tr>
                            </>
                        })
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}