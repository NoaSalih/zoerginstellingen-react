import {APIs} from "../apis/APIs";


const axios = require("axios");

class UserService {

    configurations() {
        const token = JSON.parse(sessionStorage.getItem("user")).token
        return {
            headers: {Authorization: token}
        };
    }

    async handleLogin(userDetails) {
        const loginForm = new FormData()
        loginForm.append("username", userDetails.username)
        loginForm.append("password", userDetails.password)
        return await axios.post(APIs.USER.LOGIN_API, loginForm)
    }

    async registerNewUser(userDetails) {
        return await axios.post(APIs.USER.REGISTER, userDetails)
    }

    async registerNewPatient(userDetails) {
        return await axios.post(APIs.PATIENT.CREATE_PATIENT, userDetails, this.configurations())
    }
    async doctorPatients() {
        return await axios.get(APIs.PATIENT.DOCTOR_PATIENTS, this.configurations())
    }
    async getAllDoctors() {
        return await axios.get(APIs.USER.GET_ALL_DOCTORS, this.configurations())
    }

    async getAllAppointments() {
        return await axios.get(APIs.APPOINTMENT.GET_ALL, this.configurations())
    }
    async getAllPatientAppointments() {
        return await axios.get(APIs.APPOINTMENT.GET_ALL_BY_PATIENT, this.configurations())
    }

    async patientAppointments() {
        return await axios.get(APIs.APPOINTMENT.MY_DOCTOR_APPOINTMENT, this.configurations())
    }

    async applyForAppointment(data) {
        return await axios.post(APIs.APPOINTMENT.APPLY_FOR_APPOINTMENT,data, this.configurations())
    }
}

export default new UserService()