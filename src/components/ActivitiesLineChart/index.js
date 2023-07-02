import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,

    Tooltip,
    ResponsiveContainer,

  } from "recharts";

import {FaCircle} from 'react-icons/fa'
   
import './index.css'

const data = [
    {
        name:'',
        guest:250,
        user:180,
        amt:0,
    },
    {
      name: "Week 1",
      guest: 400,
      user: 240,
      amt: 2400
    },
    {
      name: "Week 2",
      guest: 300,
      user: 139,
      amt: 2210
    },
    {
      name: "Week 3",
      guest: 200,
      user: 400,
      amt: 2290
    },
    {
      name: "Week 4",
      guest: 280,
      user: 308,
      amt: 2000
    },
        {
        name:'',
        guest:200,
        user:456,
        amt:0,
    },
  ];
  

const ActivitiesLineChart = () => (
    <div className='line-chart-container'>
    <h4 className="chart-heading">Activities</h4>
    <div className="line-chart-head">

        <div className='select-container'>
        <select value="May-June 2021" className='select-element' name="slick">
                <option value={"May-June 2021"} >May-June 2021</option>
                <option value={"June-July 2021"}>June-July 2021</option>
                <option value={"July-August 2021"}>July-August 2021</option>
            </select>
        </div>
        <div className="chart-legend"> 
            <p className='guest'><span ><FaCircle color="#E9A0A0" size={10}/></span> Guests</p>
            <p className="user"><span ><FaCircle color="#9BDD7C" size={10}/></span>Users</p>
        </div>
    </div>
    <ResponsiveContainer width="100%" height="100%">
           <LineChart width="100%" height="100%" data={data}  >

            <CartesianGrid vertical={false}  width="100%" height="100%" / >
            <XAxis dataKey="name"  axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip/>
            <Line
            type="monotone"
            dataKey="guest"
            stroke="#E9A0A0"
            activeDot={{ r: 10 }}
            dot={false}
            strokeWidth={3}
            />
            {/* <Legend verticalAlign='top' height={56} iconType='circle' align='right'/> */}
            <Line type="monotone" dataKey="user" stroke="#9BDD7C" dot={false} strokeWidth={3}/>
        </LineChart>
        </ResponsiveContainer>
       
   </div>
)

export default ActivitiesLineChart