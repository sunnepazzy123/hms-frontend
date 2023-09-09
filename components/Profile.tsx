"use client"
import React from "react";
import Input from "./Input";
import { IStaffs } from "@/app/interfaces/staffs.interface";
import { useForm } from "react-hook-form";

const Profile = ({user = {} }: any) => {
    const { register, control, setValue, handleSubmit } = useForm({
        defaultValues: {
          lastName: user.lastName,
          firstName: user.firstName,
          gender: user.gender,
          date: '2023-08-08',
          address: user.address,
    
        } as unknown as Partial<IStaffs>,
      });
      const onSubmit = (data: any) => {
        console.log(data);
      };
  return (
    <div className="card shadow-xl w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card-body items-center text-center">
        <h2 className="card-title">Profile</h2>
        <p className="text-center">{user.card_no}</p>
        <div className="grid grid-flow-row w-full text-left">
          <Input register={register} name='firstName' />
          <Input register={register} name='lastName'  />
          <Input register={register} name='gender' />
        </div>
        <div className="card-actions">
          <button className="btn btn-primary btn-sm">Update</button>
        </div>
      </div>
        </form>

    </div>
  );
};

export default Profile;
