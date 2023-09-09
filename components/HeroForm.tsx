"use client";
import React from "react";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { ILogin } from "@/app/interfaces/login.interface";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const HeroForm = () => {
  const router = useRouter();
  const { register, control, handleSubmit,} = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: ILogin) => {
    const result = await signIn("credentials", {
      redirect: false,
      username: data.username,
      password: data.password,
    });
    if (result?.ok) {
      router.push("/");
    }
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Login</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <Input register={register} name='username' />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <Input register={register} name='password' />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <DevTool control={control} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeroForm;
