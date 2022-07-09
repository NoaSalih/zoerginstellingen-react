import * as React from "react";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import './profile.css'

export default function Profile() {
    const user = JSON.parse(sessionStorage.getItem("user"))
    useEffect(() => {
        console.log(user)
    }, [user])
    return (<>
        <br/><br/><br/>
        <button className="btnUpdateProfile ">
            <Link className={"LinkTag"} to={"/edit-profile"}>Bijwerken</Link></button>
        <table className="tableProfile">
            <tr>
                <th>Informatie</th>
                <th>Gegevens</th>
            </tr>
            <tr>
                <td>Naam</td>
                <td>
                    {user.username}
                </td>
            </tr>
            <tr>
                <td>Email</td>
                <td>{user.email}</td>
            </tr>
            <tr>
                <td>Kwalificatie</td>
                <td>{user.qualification}</td>
            </tr>
            <tr>
                <td>Telefoonnummer</td>
                <td>{user.contactNumber}</td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>{user.gender}</td>
            </tr>
            <tr>
                <td>Functie beschrijving</td>
                <td>{user.userDescription}</td>
            </tr>
        </table>
    </>)
}