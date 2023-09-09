"use client";
import { getPatients } from "@/app/store/api/patients";
import { useQuery } from "@tanstack/react-query";
import Datatable from "../datatable/Datatable";
import Loader from "../Loader";
import { patientColumns } from "../datatable/dataSource";

const Patients = () => {
  const { data: patients, isLoading } = useQuery({
    queryKey: ["patients"],
    queryFn: getPatients,
    staleTime: 10000,
  });
  return (
    <>
      {isLoading && <Loader />}
      <Datatable list={patients} name="Patients" column={patientColumns} />
    </>
  );
};

export default Patients;
