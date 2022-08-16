import { useParams } from "react-router-dom";
import axios from 'axios';
import React from 'react'

const Edit = ({ loadChart }) => {
  const [datas, setDatas] = React.useState([]);
  const id = useParams()
  console.log(datas)

  React.useEffect(() => {
    axios.get(`http://localhost:3001/charts/1`).then((res) => {
      setDatas(res.data.datas);
    })
    } , [])



    let ok = [datas]
    // remove the strings from the array

    console.log(ok)
        // let okkk = datas.toString().split(',').map(Number);
        let okkk = datas.toString().split(',').map(Number);

        console.log(okkk)
    // ok.slice(0, 3)

    
    console.log(ok)
    // split the data into individual arrays
    // let data = ok.map(function(d) {
    //   return d.split(',').map(function(v) {
    //     return parseFloat(v);
    //   });
    // });
    // console.log(data)
    let okk = datas
    console.log(ok, okk)




  var data1 = {
    datas: okkk
  }
  const submitValues = () => {
    axios.put(`http://localhost:3001/charts/1`, data1)
    .then((res) => {
      loadChart()
  } , [])
  }

  return (
    <div>
      <form onSubmit={submitValues}>
          <input className='ok' value={datas} onChange={e => setDatas(e.target.value)} />
          <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default Edit