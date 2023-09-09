export interface IMedicalRecords {
    staff_id: string,
    card_no: string,
    diagnosis: string,
    note: string,
    vital: IVital
    assignee: string
}

interface IVital {
        blood_pressure: number,
        pulse: number,
        temperature: number,
        respiration: number,
        height: number,
        weight: number
}