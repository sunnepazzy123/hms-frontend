"use client";
import { useQuery } from "@tanstack/react-query";
import Datatable from "../datatable/Datatable";
import Loader from "../ui/Loader";
import { medicalRecordColumns } from "../datatable/dataSource";
import { getMedicalRecords } from "@/app/store/api/medical-records";
import { useParams } from 'next/navigation'
import { useHmsStore } from "@/app/store";

const MedicalRecords = () => {
  const params = useParams()
  const patient_id = params?.id
  const dynamicKey = patient_id ? `medical-records/patients/${patient_id}` : 'medical-records';

  const { data: medicalRecords, isLoading } = useQuery({
    queryKey: [dynamicKey],
    queryFn: ({signal}) => getMedicalRecords({patient_id, signal}),
    staleTime: 5000,
    cacheTime: dynamicKey ? 10000 : 86400 * 1000
  });
  const medicalRecord = useHmsStore((state: any)=> state.medicalRecord)
  return (
    <>
  
      <h2 className="text-center text-xl text-black bold">{patient_id ? `${medicalRecord.card_no || ''} Patient Records` : 'Medical Records'}</h2>
      {isLoading && <Loader />}
      <Datatable list={medicalRecords} name="Medical Records" column={medicalRecordColumns} />
    </>
  );
};

export default MedicalRecords;
