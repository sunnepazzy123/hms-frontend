
import { Axios } from "../../config"


export const getMedicalRecords= async ({card_no = null, signal}: any) => {
       if(card_no) {
        const { data } = await Axios.get<any>(`/medical-records?card_no=${card_no}`, {signal})
        return data
       }
        const { data } = await Axios.get<any>(`/medical-records`, {signal})
        return data
}