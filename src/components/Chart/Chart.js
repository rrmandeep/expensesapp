import React from 'react';
import ChartBar from './ChartBar';
import "./Chart.css"

const Chart = (props) => {
  const itemValues = props.data.map((item) => item.value)
  const totalMax = Math.max(...itemValues);

  return(
    <div className="chart"> 
      {props.data.map((item) => (
          <ChartBar 
            key={item.lable}
            value={item.value}
            maxValue={totalMax}
            lable={item.lable}
            />
          )
        )
      }  
    </div>
  )
}

export default Chart;