import { IPatients } from "@/app/interfaces/patients.interface"
import { Axios } from "../../config"


export const getPatients = async () => {
    const { data } = await Axios.get<IPatients[]>(`/patients`)
    return data
}

export const getPatient = async (id: string) => {
    const { data } = await Axios.get<IPatients>(`/patients/${id}`)
    return data
}