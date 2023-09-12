"use client";
import Link from "next/link";
import "./datatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Grid } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { renderCellFormatDate } from "./dataSource";
import SimpleDialog from "@/components/Modal";
import Profile from "../Profile";
import MedicalRecord from "../MedicalRecord";
import { useRouter } from "next/navigation";
import { useHmsStore } from "@/app/store";

interface IDatatableProps {
  list: any;
  column: any;
  name: string;
  routePath: any;
  handlerOption?: (row: any, name: string) => void;
}

const Datatable = ({ list = [], column = [], name, routePath=null }: IDatatableProps) => {
  const segmentName = name === "Medical Records" ? "medical-records" : name;

  const [open, setOpen] = useState(false);
  const router = useRouter();
  const record = useHmsStore((state: any) => state.medicalRecord)

  const handler = (event: any, row: any) => {
    if(event.target.name === 'records') {
      if(routePath) return
      const redirect = `/medical-records/patients/${row.patient_id._id}`;
      useHmsStore.setState({medicalRecord: row})
      router.push(redirect)
      return
    }
    setOpen(true);
  };

  const actionColumn = [
    {
      field: "created_at",
      headerName: "created_at",
      width: 100,
      renderCell: renderCellFormatDate,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params: any) => {
        return (
          <div className="cellAction">
            <button
              className="viewButton"
              name="view"
              onClick={(e) => handler(e, params.row)}
            >
              View
            </button>
            <button
              className="recordButton"
              name="records"
              onClick={(e) => handler(e, params.row)}
              disabled={routePath}

            >
              Records
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <Grid>
        <div className="datatableTitle">
          <p>Add New {name}</p>
          <Stack direction={"row"} spacing={2}>
            <Link href={`/${segmentName}/create`} className="link">
              Reset
            </Link>
            {segmentName === "medical-records" ? (
              <Link href={`/${segmentName}/create`} className="link">
                Create
              </Link>
            ) : (
              <Link href={"/register"} className="link">
                Create
              </Link>
            )}
          </Stack>
        </div>
      </Grid>

      <DataGrid
        className="datagrid"
        rows={list}
        columns={column?.concat(actionColumn)}
        getRowId={(row) => row._id}
        slots={{ toolbar: GridToolbar }}
      />
      {open && (
        <SimpleDialog open={open} handleClose={setOpen}>
          {segmentName === "medical-records" ? (
            <MedicalRecord medicalRecord={record} />
          ) : (
            <Profile user={record} />
          )}
        </SimpleDialog>
      )}
    </div>
  );
};

export default Datatable;
