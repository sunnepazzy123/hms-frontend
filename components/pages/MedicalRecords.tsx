"use client";
import { useQuery } from "@tanstack/react-query";
import Datatable from "../datatable/Datatable";
import Loader from "../Loader";
import { medicalRecordColumns } from "../datatable/dataSource";
import { getMedicalRecords } from "@/app/store/api/medical-records";

const MedicalRecords = () => {
  const { data: mdicalRecords, isLoading } = useQuery({
    queryKey: ["medical-records"],
    queryFn: getMedicalRecords,
    staleTime: 10000,
  });
  return (
    <>
      {isLoading && <Loader />}
      <Datatable list={mdicalRecords} name="Medical Records" column={medicalRecordColumns} />
    </>
  );
};

export default MedicalRecords;
