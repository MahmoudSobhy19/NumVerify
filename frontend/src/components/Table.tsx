import React from "react";
import { useTable, useGlobalFilter } from "react-table";
import { GlobalFilter } from "./GlobalFilter";

interface columnsInterface {
  Header: string;
  accessor: string;
}

export interface TableProps extends React.TableHTMLAttributes<HTMLElement> {
  className?: string;
  data: object[];
  columns: columnsInterface[];
  filter?: boolean;
}

export const Table: React.FC<TableProps> = ({
  className,
  data,
  columns,
  filter,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    state,
  }: any = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter
  );

  const { globalFilter } = state;

  return (
    <>
      <div className="relative overflow-x-auto">
        {filter && (
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        )}
        <table
          className={`${className} w-full text-left text-sm text-gray-500`}
          {...getTableProps()}
        >
          <thead className="w-full bg-gray-50 text-xs uppercase text-gray-700">
            {headerGroups.map((headerGroup: any) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className="w-full flex flex-col text-center md:text-left md:flex-row"
              >
                {headerGroup.headers.map((column: any) => (
                  <th {...column.getHeaderProps()} className="w-full px-6 py-3">
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row: any) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className="w-full flex flex-col text-center md:text-left md:flex-row border-b bg-white"
                >
                  {row.cells.map((cell: any) => {
                    return (
                      <td {...cell.getCellProps()} className="px-6 py-4">
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
