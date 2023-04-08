import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Title
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
    <>
      <LineChart width={1000} height={300} data={data}>
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
        <Title text="Code Zinger" />
      </LineChart>
    </>
  );
}

export default Linechart;
