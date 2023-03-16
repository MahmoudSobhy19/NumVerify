import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Label } from "../components/Label";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required"),
      password: Yup.string()
        .min(6, "Should be 6 Numbers or characters")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        handleLogin();
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    navigate("/");
  };

  return (
    <div className="flex justify-center pt-20">
      <form
        className="flex w-96 flex-col gap-4 rounded-lg border border-slate-300 p-8 shadow-sm"
        onSubmit={formik.handleSubmit}
      >
        <>
          <p className="w-full text-2xl font-bold text-center py-2">Login</p>
          <div className="w-full">
            <Label className="text-left" htmlFor="email">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              {...formik.getFieldProps("email")}
              error={formik.touched.email ? formik.errors.email : ""}
            />
          </div>
          <div className="w-full">
            <Label className="text-left" htmlFor="password">
              Password
            </Label>
            <Input
              type="password"
              id="password"
              {...formik.getFieldProps("password")}
              error={formik.touched.password ? formik.errors.password : ""}
            />
          </div>
          <Button blue type="submit">
            Login
          </Button>
        </>
      </form>
    </div>
  );
};
