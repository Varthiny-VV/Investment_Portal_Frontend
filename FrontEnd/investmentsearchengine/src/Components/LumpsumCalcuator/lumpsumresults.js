import React, { useState, useEffect, useMemo } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function LumpsumResults({ investmentAmount, expectedRateOfReturn, tenure }) {
  const [CorpusValue, setCorpusValue] = useState(0);
  const [TotalEarnings, setTotalEarnings] = useState(0);

  const data = useMemo(() => {
    const newData = [];
    for (let t = 0; t <= tenure; t++) {
      const corpus = investmentAmount * Math.pow(1 + (expectedRateOfReturn / 100), t);
      newData.push({ name: t.toString(), value: corpus });
    }
    setCorpusValue(newData[newData.length - 1].value);
    setTotalEarnings(newData[newData.length - 1].value - investmentAmount);
    return newData;
  }, [investmentAmount, expectedRateOfReturn, tenure]);

  const maxYAxisValue = Math.ceil(CorpusValue / 100) * 100; 
  const numYAxisIntervals = 10; 
  const maxYAxisInterval = maxYAxisValue / numYAxisIntervals;

  const maxXAxisValue = tenure; 


  const yTicks = [];
  for (let i = 0; i <= numYAxisIntervals; i++) {
    yTicks.push(i * maxYAxisInterval);
  }

  return (
    <div>
      <p> Your Corpus Value : {CorpusValue}</p>
      <p> Total Earnings : {TotalEarnings} </p>
      <p> Total Deposited Amount : {investmentAmount}</p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={Math.ceil(maxXAxisValue / 10)} />
          <YAxis domain={[0, maxYAxisValue]} ticks={yTicks} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LumpsumResults;
