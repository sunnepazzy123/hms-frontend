import Patients from "@/components/pages/Patients";
import React from "react";

const PatientsPage = async () => {
  return (
    <>
      <h2 className="text-center text-xl text-black">Patient Lists</h2>
      <Patients />
    </>
  );
};

export default PatientsPage;
