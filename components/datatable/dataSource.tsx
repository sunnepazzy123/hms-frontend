import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"; 
dayjs.extend(relativeTime);


export const renderCellFormatDate = (params: { row: any; field: string }) => {
  const { created_at, dob } = params.row;
  let date: string;
  if (params.field === "created_at") {
    const date = dayjs().to(dayjs(created_at));
    return <div className={`cellWithStatus`}>{date}</div>;
  }
  date = dayjs(dob).format("MM-DD-YYYY");
  return <div className={`cellWithStatus`}>{date}</div>;
};

  
  export const patientColumns = [
    {
      field: 'card_no',
      headerName: 'card_no',
      width: 230,
    },
    {
        field: 'firstName',
        headerName: 'firstName',
        width: 230,
      },
      {
        field: 'lastName',
        headerName: 'lastName',
        width: 230,
      },
  
    {
      field: 'gender',
      headerName: 'gender',
      width: 100,
    },

    {
        field: 'phone',
        headerName: 'phone',
        width: 150,
    },

    {
        field: 'dob',
        headerName: 'dob',
        width: 100,
        renderCell: renderCellFormatDate,
      },
      {
        field: 'enabled',
        headerName: 'status',
        width:70,
    },

  ];


  export const medicalRecordColumns = [
    {
      field: 'card_no',
      headerName: 'card_no',
      width: 230,
    },
    {
        field: 'firstName',
        headerName: 'firstName',
        width: 230,
        renderCell: (params: any) => {
            const { patient_id } = params.row
            if(patient_id && patient_id.firstName) {
                return (
                    <div>{patient_id.firstName}</div>
                )
            }
        }
      },
      {
        field: 'lastName',
        headerName: 'lastName',
        width: 230,
        renderCell: (params: any) => {
            const { patient_id } = params.row
                return (
                    <div>{patient_id.lastName}</div>
                )
            
        }
      },
  
    {
      field: 'gender',
      headerName: 'gender',
      width: 100,
      renderCell: (params: any) => {
        const { patient_id } = params.row
            return (
                <div>{patient_id.gender}</div>
            )
        }
    },
    {
        field: 'staff_id',
        headerName: 'assigned',
        width: 150,
        renderCell: (params: any) => {
            const { staff_id } = params.row
                if(staff_id) {
                    return (
                        <div>Dr. {staff_id.firstName}</div>
                    )
                }
                return (
                    <div>unassigned</div>
                )
            }
      },

    {
        field: 'status',
        headerName: 'status',
        width: 100,
      },

  ];







