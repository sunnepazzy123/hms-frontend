import { IPatients } from "@/app/interfaces/patients.interface"
import { Axios } from "../../config"
import { IStaffs } from "@/app/interfaces/staffs.interface"


export const registerPatient = async (body: IPatients) => {
    const { data } = await Axios.post<IPatients>(`/auth/register_patient`, body)
    return data
}

export const registerStaff = async (body: IStaffs) => {
    const { data } = await Axios.post<IStaffs>(`/auth/register_staff`, body)
    return data
}