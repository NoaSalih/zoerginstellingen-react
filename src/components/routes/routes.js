import {Route, Routes} from "react-router-dom";
import {Login} from "../public/login/login";
import {Register} from "../public/Register";
import {Welcome} from "../home/Welcome";
import {ErrorPage} from "../public/error/404";
import Doctors from "../admin/Doctors";
import Appointments from "../admin/Appointments";
import PatientAppointment from "../patient/PatientAppointment";
import Profile from "../public/Profile";
import ManageAppointments from "../doctor/manageAppointments";
import RequestAppointment from "../patient/RequestAppointment";
import EditProfile from "../public/EditProfile";
import AllPatients from "../doctor/Patients";
import {AddNewPatient} from "../doctor/AddNewPatient";
export const routesBeforeLogin = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Login/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/register"} element={<Register/>}/>
        </Routes>
    )
}

export const routesAfterLogin = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Welcome/>}/>
            <Route path={"/doctors"} element={<Doctors/>}/>
            <Route path={"/add-new-patient"} element={<AddNewPatient/>}/>
            <Route path={"/patient-appointment"} element={<PatientAppointment/>}/>
            <Route path={"/patients"} element={<AllPatients/>}/>
            <Route path={"/profile"} element={<Profile/>}/>
            <Route path={"/edit-profile"} element={<EditProfile/>}/>
            <Route path={"/appointments"} element={<Appointments/>}/>
            <Route path={"/request-appointment"} element={<RequestAppointment/>}/>
            <Route path={"/manage-appointments"} element={<ManageAppointments/>}/>
            <Route path={"*"} element={<ErrorPage/>}/>
        </Routes>
    )
}
