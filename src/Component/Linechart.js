import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
function Linechart({ user }) {
  const data = [];
  const totalCodeZinger = useMemo(() => {
    const regxMonth = new RegExp("CodeZinger", "gi");
    return Object.keys(user).filter((ele) => {
      return regxMonth.test(ele);
    });
  }, [user]);
  let mko = totalCodeZinger
    .map((ele) => {
      return ele.split(" ");
    })
    .map((ele, ind) => {
      return ele;
    });
  for (let i in mko) {
    data.push({
      date: mko[i][0] + " " + mko[i][1],
      value: user[totalCodeZinger[i]],
    });
  }
  return (
    <div>
      <span className="block text-center text-[1.8rem] -translate-x-[1rem] font-bold text-blue-600 max-sm:rotate-90 max-sm:relative max-sm:ml-[25rem] max-sm:mt-[5rem]">
        Code Zinger
      </span>
      <LineChart
        width={1000}
        height={300}
        data={data}
        className="max-sm:rotate-90"
      >
        <Line
          type="monotone"
          dataKey="value"
          stroke="#2979ff"
          strokeWidth={3}
        />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" stroke="#ff5722" />
        <YAxis stroke="#ff5722" />
        <Tooltip />
      </LineChart>
    </div>
  );
}

export default Linechart;
