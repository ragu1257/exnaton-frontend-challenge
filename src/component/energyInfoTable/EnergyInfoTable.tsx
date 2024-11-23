import { useEffect, useState } from "react";
import useEnergyDataFetch from "../../hooks/useEnergyDataFetch";
import { format, startOfWeek } from "date-fns";
import { BarChart, LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import KPIs from "./KPIs";
import { IEnergyData } from '../../types/energyDataTypes'
import useKPIs from "../../hooks/useKPIs";


const EnergyInfoTable = () => {
  const { data, loading, error } = useEnergyDataFetch(
    "https://exnaton-public-s3-bucket20230329123331528000000001.s3.eu-central-1.amazonaws.com/challenge/api.json"
  );
  const [filterData, setFilterData] = useState<IEnergyData[]>([]);
  const [interval, setInterval] = useState("daily");

  const {  totalProduction, totalConsumption, totalSelfConsumed} = useKPIs(filterData)

  
  // Function to group data by interval (daily, weekly, monthly)
  const groupByInterval = (data: IEnergyData[] = [], interval: string) => {
    const groupedData: { [key: string]: IEnergyData } = {};

    data.forEach((item) => {
      const date = new Date(item.ts);
      let groupKey: string = "";

      if (interval === "daily") {
        groupKey = format(date, "yyyy-MM-dd");
      } else if (interval === "weekly") {
        groupKey = format(startOfWeek(date), "yyyy-ww");
      } else if (interval === "monthly") {
        groupKey = format(date, "yyyy-MM");
      }

      if (groupKey && !groupedData[groupKey]) {
        groupedData[groupKey] = {
          ts: groupKey,
          prod: 0,
          cons: 0,
          self: 0,
          fromGrid: 0,
          toGrid: 0,
        };
      }

      // Accumulate values by group
      groupedData[groupKey].prod += item.prod;
      groupedData[groupKey].cons += item.cons;
      groupedData[groupKey].self += item.self;
      groupedData[groupKey].fromGrid += item.fromGrid;
      groupedData[groupKey].toGrid += item.toGrid;
    });

    return Object.values(groupedData);
  };

  // Update filterData whenever data or interval changes
  useEffect(() => {
    if (data) {
      const grouped = groupByInterval(data, interval);
      setFilterData(grouped);
    }
  }, [data, interval]);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: Unable to load data{error}</p>;
  if (filterData.length === 0) return <p>No data available for the selected interval.</p>;
  
  return (
    <div>

      {/* Interval selection */}
      <div style={{paddingTop : '20px', paddingBottom: '20px'}}>
        <label>
          <input
            type="radio"
            value="daily"
            checked={interval === "daily"}
            name="interval"
            onChange={() => setInterval("daily")}
          />
          Daily
        </label>
        <label>
          <input
            type="radio"
            value="weekly"
            checked={interval === "weekly"}
            name="interval"
            onChange={() => setInterval("weekly")}
          />
          Weekly
        </label>
        <label>
          <input
            type="radio"
            value="monthly"
            checked={interval === "monthly"}
            name="interval"
            onChange={() => setInterval("monthly")}
          />
          Monthly
        </label>
      </div>
      <h4>Overview of your energy usage</h4>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart width={730} height={250} data={filterData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="ts" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="prod" stroke="#8884d8" />
          <Line type="monotone" dataKey="cons" stroke="#82ca9d" />
          <Line type="monotone" dataKey="self" stroke="#ffc658" />
          <Line type="monotone" dataKey="fromGrid" stroke="#ff7300" />
          <Line type="monotone" dataKey="toGrid" stroke="#413ea0" />
        </LineChart>
      </ResponsiveContainer>

      <div>
        <KPIs totalProduction={totalProduction} totalConsumption={totalConsumption} totalSelfConsumed={totalSelfConsumed} />
      </div>
    </div>
  );
};

export default EnergyInfoTable;
