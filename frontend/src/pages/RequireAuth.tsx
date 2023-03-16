import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";

export const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      number: "",
    },
    validationSchema: Yup.object({
      number: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        handelSearch(values.number);
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handelSearch = async (number: any) => {
    setLoading(true);
    await axios
      .get(`/history/${number}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
        formik.setFieldValue("number", " ");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "false") {
      navigate("/login");
    }
  }, []);

  return (
    <div className="container mx-auto w-full flex flex-col md:flex-row gap-4 justify-center pt-4">
      <form
        className="flex w-full md:w-[50%] h-fit flex-col gap-4 rounded-lg border border-slate-300 p-8 shadow-sm"
        onSubmit={formik.handleSubmit}
      >
        <>
          <p className="w-full text-2xl font-bold text-center py-2">
            Enter Number
          </p>
          <div className="w-full">
            <Input
              type="text"
              id="number"
              placeholder="Enter Number"
              {...formik.getFieldProps("number")}
              error={formik.touched.number ? formik.errors.number : ""}
            />
          </div>
          <Button blue loading={loading} type="submit">
            Search
          </Button>
        </>
      </form>
      <div className="w-full md:w-[50%] rounded-lg border border-slate-300 p-8 shadow-sm">
        {!data && (
          <p className="text-gray-700 font-semibold">
            No Search Data! <br /> Please Enter Phone Number And Search.
          </p>
        )}
        {data && (
          <div className="flex flex-col gap-3 text-gray-500 font-semibold">
            <p>
              Number is : <span className="text-gray-700">{data.number}</span>
            </p>
            <p>
              Status :{" "}
              <span>
                {data?.valid ? (
                  <span className="text-green-600 font-semibold">Valid</span>
                ) : (
                  <span className="text-red-600 font-semibold">Not Valid</span>
                )}
              </span>
            </p>
            {data?.valid && (
              <div className="flex flex-col gap-3">
                <p>
                  carrier :{" "}
                  <span className="text-gray-700">{data.carrier}</span>
                </p>
                <p>
                  Country Code :{" "}
                  <span className="text-gray-700">{data.country_code}</span>
                </p>
                <p>
                  Country Name :{" "}
                  <span className="text-gray-700">{data.country_name}</span>
                </p>
                <p>
                  Country Prefix :{" "}
                  <span className="text-gray-700">{data.country_prefix}</span>
                </p>
                <p>
                  International Format :{" "}
                  <span className="text-gray-700">
                    {data.international_format}
                  </span>
                </p>
                <p>
                  Line Type :{" "}
                  <span className="text-gray-700">{data.line_type}</span>
                </p>
                <p>
                  Local Format :{" "}
                  <span className="text-gray-700">{data.local_format}</span>
                </p>
                <p>
                  Location :{" "}
                  <span className="text-gray-700">{data.location}</span>
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
