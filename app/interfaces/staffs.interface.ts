import { genderType, roleType} from "@/app/constant/index.constant";

export interface IStaffs {
    firstName: string,
    lastName: string,
    gender: genderType,
    address: string,
    phone: number,
    role: roleType,
    dob: Date
    username: string,
    password: string,
}

