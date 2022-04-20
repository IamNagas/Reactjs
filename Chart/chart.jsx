import React from 'react'
import {PieChart,Pie,Tooltip} from "recharts";

function chart() {
    const data=[
        {name:"Facebook",value:20000000},
        {name:"Instagram",value:15000000},
        {name:"Twiter",value:10000000},
        {name:"WhatsAppp",value:100000000},
    ];
  return (
    <div>
        <h1>Social Media Networks</h1>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx={500} 
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />          
          <Tooltip />
        </PieChart>
    );
   </div>
  )
}

export default chart