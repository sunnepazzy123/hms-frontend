"use client"
import React from 'react'
import { IMedicalRecords} from '@/app/interfaces/medical-records.interface'
import { useForm } from 'react-hook-form';
import Input from './Input';

const MedicalRecord = ({medicalRecord = {}}: any) => {
    const { register, control, setValue, handleSubmit } = useForm({
        defaultValues: {
          diagnosis: medicalRecord.diagnosis,
          status: medicalRecord.status,

    
        } as unknown as Partial<IMedicalRecords>,
      });
      const onSubmit = (data: any) => {
        console.log(data);
      };
  return (
    <div className="card shadow-xl w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card-body items-center text-center">
        <h2 className="card-title">Medical Records</h2>
        <p className="text-center">{medicalRecord.card_no}</p>
        <div className="grid grid-flow-row w-full text-left">
          <Input register={register} name='diagnosis' />
        </div>
        <div className="card-actions">
          <button className="btn btn-primary btn-sm">Update</button>
        </div>
      </div>
        </form>

    </div>
  )
}

export default MedicalRecord