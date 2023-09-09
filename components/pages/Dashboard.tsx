"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getMedicalRecords } from "@/app/store/api/medical-records";
import { getPatients } from "@/app/store/api/patients";
import Datatable from "../datatable/Datatable";
import { medicalRecordColumns } from "../datatable/dataSource";
import Widget from "../Widget";
import Alert from '../Alert'
import Loader from '../Loader'
import { dataDashboardWidget } from "../dataLinks";
import Header from "../Header";

const Dashboard = () => {
  const { data: patients, isLoading } = useQuery({
    queryKey: ["patients"],
    queryFn: getPatients,
  });

  const {
    data: medicalRecords,
    error,
    isError,
  } = useQuery({
    queryKey: ["medical-records"],
    queryFn: ({ signal }) => getMedicalRecords({ signal }),
    staleTime: 1000,
  });

  return (
    <>
      <div className="grid grid-rows sm:grid-flow-col lg:sm:grid-flow-col gap-3 justify-center">
        {dataDashboardWidget.map((item, index) => (
          <div key={item.link}>
            <Widget link={item.link} title={item.title} data={item.data} />
          </div>
        ))}
      </div>
      <div>
          <Header />
        {isLoading && (
          <Loader />
        )}
        <Alert />
      </div>
      <Datatable
        list={medicalRecords}
        column={medicalRecordColumns}
        name="Medical Records"
      />
    </>
  );
};

export default Dashboard;
