import React from "react";

interface Props {
  filter: string;
  setFilter: (value: string) => void;
}

export const GlobalFilter = ({ filter, setFilter }: Props) => {
  return (
    <div className="flex gap-2  items-center my-3 mx-2">
      <label>search : </label>
      <input
        className="border rounded bg-slate-50 focus:bg-white px-2 py-1 focus:outline-0 flex-1"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};
