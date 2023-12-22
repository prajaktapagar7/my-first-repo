import React from "react";
import { useEffect, useState } from "react";

const Covid19 = () => {
  const [data, setData] = useState([]);
  const getCovid19Data = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actData = await res.json();
    setData(actData.statewise);
  };
  useEffect(() => {
    getCovid19Data();
  }, []);
  return (
    <>
      <div>
        <div>
          <h1>India Covid 19 Dashboard</h1>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>State</th>
                <th>Active</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>last Updated Time</th>
              </tr>
            </thead>
            <tbody>
              {data.map((val, i) => {
                return (
                  <tr>
                    <th>{val.state}</th>
                    <th>{val.active}</th>
                    <th>{val.confirmed}</th>
                    <th>{val.recovered}</th>
                    <th>{val.deaths}</th>
                    <th>{val.lastupdatedtime}</th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Covid19;
