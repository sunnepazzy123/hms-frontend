"use client";
import { getPatients } from "@/app/store/api/patients";
import { useQuery } from "@tanstack/react-query";
import Datatable from "@/components/datatable/Datatable";
import Loader from "@/components/ui/Loader";
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
      <Datatable list={patients} name="Patients" column={patientColumns} routePath={patients ? patients[0]._id : null}/>
    </>
  );
};

export default Patients;
