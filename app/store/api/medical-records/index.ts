import { IMedicalRecords } from "@/app/interfaces/medical-records.interface";
import { Axios } from "../../config";

export const getMedicalRecords = async ({
  card_no = null,
  patient_id = null,
  signal,
}: any) => {
  if (card_no) {
    const { data } = await Axios.get<IMedicalRecords[]>(
      `/medical-records?card_no=${card_no}`,
      { signal }
    );
    return data;
  }
  if (patient_id) {
    const { data } = await Axios.get<IMedicalRecords[]>(
      `/medical-records/patients/${patient_id}`,
      { signal }
    );
    return data;
  }
  const { data } = await Axios.get<IMedicalRecords[]>(`/medical-records`, {
    signal,
  });
  return data;
};

export const getAppointments = async ({ signal }: any) => {
  const { data } = await Axios.get<IMedicalRecords[]>(
    `/medical-records?status=closed`,
    { signal }
  );
  return data;
};
