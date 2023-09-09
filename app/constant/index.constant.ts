export type genderType = "male" | "female";

export type roleType = 'doctor'|'nurse'|'pharmarcist'|'admin'|'superAdmin'|'patient'

export enum roleEnum {
  doctor = "doctor",
  nurse = "nurse",
  pharmarcist = "pharmarcist",
  admin = "admin",
  superAdmin = "superAdmin",
  patient = "patient",
}

export enum statusEnum {
  busy = "busy",
  open = "open",
  closed = "closed",
  proccessed = "proccessed",
}

export enum billingStatusEnum {
  confirm = "confirm",
  unconfirm = "unconfirm",
}

export interface ISelectList {
  value: string;
  label: string;
}

export const roleSelect = [{ value: "nurse", label: "Nurse" }];

export const genderSelect = [{ value: "male", label: "Male" }];
