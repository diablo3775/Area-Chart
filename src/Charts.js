import { Chart, ChartSeries, ChartSeriesItem, ChartValueAxisCrosshair } from '@progress/kendo-react-charts';
import { DropDownList } from "@progress/kendo-react-dropdowns";
import React from 'react'
import axios from 'axios'
import './Charts.css'
import 'hammerjs';

const Charts = () => {
    const [chart, setChart] = React.useState([]);
    const [m, setM] = React.useState([]);
    const [series, setSeries] = React.useState([]);
    const [lineStyle, setLineStyle] = React.useState('normal');
    const [lineStyles] = React.useState(['normal', 'step', 'smooth']);

    function loadChart() {
        axios.get("http://localhost:3001/chart").then((res) => {
            setChart(res.data);
            setM(res.data)
          })
    }

    function setChartData(value) {
      console.log(document.getElementsByClassName('ok')[0].value)
      setChart(value)
    }

    React.useEffect(() => {
        loadChart();
    } , []);

    // React.useEffect(() => {
    //   axios.get('http://localhost:3001/chart').then((res) => {
    //     setM(res.data.chart)
    //     console.log(res.data.chart)
    // })
    // }, [])

    // React.useEffect(() => {
    //     axios.get('http://localhost:3001/chart').then((res) => {
    //         setSeries(res.data);
    // } , []);
    // })

    // let data = {
    //     "chart": {
    //       data : [chart.data],
    //     }
    // }
    
  //   let data = {
  //     "chart": [chart.data]
  // }



    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3001/chart', 
        [m]
        ).then((res) => {
        loadChart();
    } , []);
    }


    // [0,10,0,20,0,10,0,30,0]
    console.log(chart)
    return <div>  
          <DropDownList data={lineStyles} value={lineStyle} onChange={event => {
        setLineStyle(event.target.value);
      }} />
          <Chart>
            <ChartSeries>
              <ChartSeriesItem type="area" data={m} markers={{
            visible: false
          }} line={{
            style: lineStyle
          }} />
            </ChartSeries>
          </Chart>
          <form onSubmit={handleSubmit}>
          {/* <input value={series} onChange={e => setSeries(e.target.value)} /> */}
          <input className='ok' value={m} onChange={e => setM(e.target.value)} />
          <button>ok</button>
          </form>
        </div>;
}

export default Charts