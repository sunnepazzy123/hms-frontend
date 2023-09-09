import { genderType, roleType} from "@/app/constant/index.constant";

export interface IPatients {
    firstName: string,
    lastName: string,
    gender: genderType,
    address: string,
    phone: number,
    role: roleType,
    dob: Date
}

