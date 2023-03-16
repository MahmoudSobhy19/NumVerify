import axios from "axios";
import { useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import { Loader } from "../components/Loader";
import { Table } from "../components/Table";
export const History = () => {
  const { data, isLoading, refetch } = useQuery("Get History", async () => {
    const response = await axios.get("/history");
    return response.data.map((el: any, index: number) => ({
      id: index + 1,
      number: el.number,
      status: el.valid ? (
        <span className="text-green-600 font-semibold">Valid</span>
      ) : (
        <span className="text-red-600 font-semibold">Not Valid</span>
      ),
      date: el.createdAt.split("T")[0],
      carrier: el.carrier,
      country_code: el.country_code,
      country_name: el.country_name,
      country_prefix: el.country_prefix,
      line_type: el.line_type,
      location: el.location,
    }));
  });

  const columns = useMemo(
    () => [
      {
        Header: "#",
        accessor: "id",
      },
      {
        Header: "Number",
        accessor: "number",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Carrier",
        accessor: "carrier",
      },
      {
        Header: "Country Code",
        accessor: "country_code",
      },
      {
        Header: "Country Name",
        accessor: "country_name",
      },
      {
        Header: "Country Prefix",
        accessor: "country_prefix",
      },
      {
        Header: "Line Type",
        accessor: "line_type",
      },
      {
        Header: "Location",
        accessor: "location",
      },
    ],
    []
  );

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading)
    return (
      <div className="flex justify-center items-center pt-32">
        <Loader />
      </div>
    );

  return (
    <div className="container mx-auto">
      {!data && !isLoading && <div>No History </div>}
      {data && <Table columns={columns} data={data} filter={true} />}
    </div>
  );
};
