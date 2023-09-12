"use client";
import { useQuery } from "@tanstack/react-query";
import Datatable from "../datatable/Datatable";
import Loader from "../ui/Loader";
import { medicalRecordColumns } from "../datatable/dataSource";
import { getAppointments, } from "@/app/store/api/medical-records";

const Appointments = () => {

  const { data: appointments, isLoading } = useQuery({
    queryKey: ["appointments",],
    queryFn: ({signal}) => getAppointments({signal}),
    staleTime: 10000,
  });
  return (
    <>
      {isLoading && <Loader />}
      <Datatable list={appointments} name="Appointment Records" column={medicalRecordColumns} />
    </>
  );
};

export default Appointments;
