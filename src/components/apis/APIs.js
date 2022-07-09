export const BASEURL = "http://localhost:9090"

export const APIs = {
    "USER": {
        LOGIN_API: BASEURL+"/signin",
        REGISTER: BASEURL+"/signup",
        GET_ALL_USERS: BASEURL+"/user/getAll",
        GET_ALL_DOCTORS: BASEURL+"/user/getAllDoctors"
    },
    "PATIENT": {
        GET_ALL_PATIENTS: BASEURL+"/patients/getAll",
        CREATE_PATIENT: BASEURL+"/patients/create",
        DOCTOR_PATIENTS: BASEURL+"/patients/findByDoctorId",
    },
    "APPOINTMENT": {
        GET_ALL: BASEURL+"/appointment/getAll",
        MY_DOCTOR_APPOINTMENT: BASEURL+"/appointment/findByDoctorId",
        APPLY_FOR_APPOINTMENT: BASEURL+"/appointment/create",
        GET_ALL_BY_PATIENT: BASEURL+"/appointment/getAllByPatient"
    }
}