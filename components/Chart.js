import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";


// Bar chart that displays mortgage payments and interests
class Chart extends React.Component {
  render() {
    const { response } = this.props;
    const array = [];
    // Looping over the data retrieved from the form and retrieves
    // the payments and interests and appends it to an array
    if (response != null) {
      response.nedbetalingsplan.innbetalinger.map((row) => {
        array.push({
          dato: row.dato,
          innbetaling: Math.round(row.innbetaling),
          renter: Math.round(row.renter),
        });
        return array;
      });
    }
    return (
      <BarChart
        width={700}
        height={500}
        data={array}
        margin={{ top: 20, right: 30, left: 50, bottom: 5 }}
      >
        <XAxis dataKey="dato"/>
        <YAxis type="number"/>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip cursor={{fill: "transparent"}}/>
        <Legend />
        <Bar dataKey="innbetaling" stackId="a" fill="#8884d8" />
        <Bar dataKey="renter" stackId="a" fill="#82ca9d" />
      </BarChart>
    );
  }
}

export default Chart;
