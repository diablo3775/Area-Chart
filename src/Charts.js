import { Chart, ChartSeries, ChartSeriesItem, ChartValueAxisCrosshair } from '@progress/kendo-react-charts';
import { DropDownList } from "@progress/kendo-react-dropdowns";
import React from 'react'
import axios from 'axios'
import './Charts.css'
import 'hammerjs';
import { Link, NavLink } from 'react-router-dom';
import Edit from './Edit';

const Charts = ({ loadChart }) => {
  const [chart, setChart] = React.useState([]);
  const [m, setM] = React.useState([]);
  const [store, setStore] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [series, setSeries] = React.useState([]);
  const [lineStyle, setLineStyle] = React.useState('normal');
  const [lineStyles] = React.useState(['normal', 'step', 'smooth']);

  function loadChart() {
    axios.get("http://localhost:3001/charts").then((res) => {
      const newData = res.data.map((mm) => ({
        datas: mm.datas,
        name: `${mm.name}`,
        id: `${mm.id}`
      }))
      setLoading(true);
      setM(newData)
      setStore(newData)
    })
  }
  React.useEffect(() => {
    loadChart();
  }, []);

  // [0,10,0,20,0,10,0,30,0]
  return <div>

   <DropDownList data={lineStyles} value={lineStyle} onChange={event => {
        setLineStyle(event.target.value);
      }} />
          {/*  <Chart>
            <ChartSeries>
              <ChartSeriesItem type="area" data={m.datas} markers={{
            visible: false
          }} line={{
            style: lineStyle
          }} />
            </ChartSeries>
          </Chart> */}
    {console.log(m)}

    {
      loading ? (
        <div>
          {
            m.map((datas, index) => {
              return (
                <div key={index}>
                      <p>{datas.name}</p>
                      <p>{datas.id}</p>
                      <p>{datas.datas}</p>
                  <Chart>
                    <ChartSeries>
                      <ChartSeriesItem type="area" data={datas.datas} markers={{
                        visible: false
                      }} line={{
                        style: lineStyle
                      }} />
                    </ChartSeries>
                  </Chart>
                  <Edit loadChart={loadChart}  />
                </div>
              )
            })

          }
        </div>
      ) : (
        <div className="loader-container"><div className="loader"></div></div>
      )
    }

  </div>;
}

export default Charts