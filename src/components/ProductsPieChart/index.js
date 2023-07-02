import { PieChart, Pie, Cell, ResponsiveContainer} from "recharts";
import {FaCircle} from 'react-icons/fa'
import './index.css'

const pieData = [
    { name: "Group A", value: 14 },
    { name: "Group B", value: 55 },
    { name: "Group C", value: 31},
   
  ];
  
const pieColors = ["#98D89E", "#EE8485", "#F6DC7D"];
  
  

const ProductsPieChart = () => (
    <div className='products-pie-chart-container'>
            

<div className="pie-chart-head">
<div > 
<h1 className="pie-heading">Top Products</h1>
</div>
<div className='select-container'>
<select value="May-June 2021" className='select-element' name="slick">
        <option value={"May-June 2021"} >May-June 2021</option>
        <option value={"June-July 2021"}>June-July 2021</option>
        <option value={"July-August 2021"}>July-August 2021</option>
    </select>
</div>
</div>
<div className="pie-chart-container">


        <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
        <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#000000"
            dataKey="value"
        >
            {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} stroke={pieColors[index % pieColors.length]}/>
            ))}
        </Pie>
        {/* <Legend verticalAlign="top" height={36} align="right" /> */}
        </PieChart>
        </ResponsiveContainer>
        <div className="pie-chart-legend">
            <div className="pie-legend-container">
                <h1 className="pie-legend"><span><FaCircle color="#98D89E"/> </span>Basic Tees</h1>
                <p>55%</p>
            </div>
            <div className="pie-legend-container">
                <h1 className="pie-legend"><span><FaCircle color="#EE8485"/> </span>Custom short Pants</h1>
                <p>55%</p>
            </div>
            <div className="pie-legend-container">
                <h1 className="pie-legend"><span><FaCircle color="#F6DC7D"/> </span>Super Hoodies</h1>
                <p>14%</p>
            </div>
        </div>
        </div>
</div>
)

export default ProductsPieChart