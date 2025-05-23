"use client";
import { useQuery } from "@tanstack/react-query";
import Datatable from "../datatable/Datatable";
import Loader from "../ui/Loader";
import { medicalRecordColumns } from "../datatable/dataSource";
import { getMedicalRecords } from "@/app/store/api/medical-records";
import { useParams } from "next/navigation";
import { useHmsStore } from "@/app/store";

const MedicalRecords = () => {
  const params = useParams();
  const patient_id = params?.id as string;
  const dynamicKey = patient_id
    ? `medical-records/patients/${patient_id}`
    : "medical-records";

  const { data: medicalRecords, isLoading } = useQuery({
    queryKey: [dynamicKey],
    queryFn: ({ signal }) => getMedicalRecords({ patient_id, signal }),
    staleTime: 5000,
    cacheTime: dynamicKey ? 10000 : 86400 * 1000,
  });
  const medicalRecord = useHmsStore((state: any) => state.medicalRecord);
  return (
    <>
      <h2 className="text-center text-xl text-black">
        {patient_id ? "Patient Records" : "Medical Records"}
      </h2>
      {medicalRecord && patient_id && <h2 className="text-center text-xl text-black"> {medicalRecord.card_no} </h2>}
      {isLoading && <Loader />}
      <Datatable
        list={medicalRecords}
        name="Medical Records"
        column={medicalRecordColumns}
        routePath={patient_id}
      />
    </>
  );
};

export default MedicalRecords;
