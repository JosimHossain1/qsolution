"use client";

import Form from "@/components/forms/Form";
import { SubmitHandler } from "react-hook-form";
import FormInput from "@/components/forms/Input";
import Link from "next/link";
import Button from "@/components/shared/Button";
import Navbar from "@/components/home/Navbar";
type FormValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      console.log(data);
    } catch (err) {}
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center w-full h-screen">
        <div className="bg-white rounded w-[90%] md:w-[40%] h-auto p-8">
          <h1 className="text-center font-semibold text-2xl">লগ-ইন করুন</h1>
          <Form submitHandler={onSubmit}>
            <div className="text-black">
              <FormInput
                name="id"
                type="text"
                size="large"
                placeholder="মোবাইল নাম্বার"
              />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                placeholder="পাসওয়ার্ড"
              />
            </div>
            <Button
              text="লগ-ইন"
              htmlType="submit"
              design="w-full rounded bg-blue-600  text-white cursor-pointer py-1 bangla text-xl"
            />
          </Form>
          <div className="flex justify-between mt-5">
            <Link
              href={"/registration"}
              className="cursor-pointer underline text-black"
            >
              নতুন একাউন্ট করুন?
            </Link>
            <Link
              href={"forgot-password"}
              className="cursor-pointer underline text-red-600"
            >
              পাসওয়ার্ড ভুলে গেছেন?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
