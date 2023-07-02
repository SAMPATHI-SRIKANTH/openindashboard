
import SideBar from '../SideBar';
import ActivitiesLineChart from '../ActivitiesLineChart';
import ProductsPieChart from '../ProductsPieChart';
import Schedule from '../Schedule';

import './index.css' 


const dashboardCardData = [
{
    id:1,
    title:'Total Revenues',
    value:'$2,129,430',
    iconUrl:'https://res.cloudinary.com/ssrikanth/image/upload/v1688192098/InstaShare/Vector_5_i1tgcf.png',
    bgColor:""
},{
    id:2,
    title:'Total Transactions',
    value:'1,520',
    iconUrl:'https://res.cloudinary.com/ssrikanth/image/upload/v1688192148/InstaShare/total_transactions_icon_efwnti.png'
},{
    id:3,
    title:'Total Likes',
    value:'9,721',
    iconUrl:'https://res.cloudinary.com/ssrikanth/image/upload/v1688192098/InstaShare/Vector_4_ghilnn.png'
},{
    id:4,
    title:'Total Users',
    value:'892',
    iconUrl:'https://res.cloudinary.com/ssrikanth/image/upload/v1688192098/InstaShare/Vector_3_s4cmd1.png'
}
]

const DashBoard = () => {
  

    const  Header = () => (
        <div className='header'>
            <div className='header-flex'>
                <div>
                    <h1 className='header-heading'>DashBoard</h1>
                </div>
                 <div className='header-right-side'>
                    <div className='search-box-container'>
                    <input
                        type="search"
                        placeholder="Search Caption"
                        className="header-search"
                        />
                        <img src="https://res.cloudinary.com/ssrikanth/image/upload/v1688192217/InstaShare/Search_icon_lf6bbd.png" alt="search-icon" className="header-search-icon" />
                    </div>
                    <img src="https://res.cloudinary.com/ssrikanth/image/upload/v1688192217/InstaShare/Vector_6_amhobu.png" alt="notification-icon" className="notification-icon" />
                    <div className='user-profile-container'>
                    <img src="https://res.cloudinary.com/ssrikanth/image/upload/v1688192098/InstaShare/image_1_hqxlmv.png" alt="user-profile" className="user-profile" /> 
                    </div>
                    
                </div>
            </div>
        </div>
    )


    const Cards = () => (
        <div>
            <ul className='cards-list'>
            {dashboardCardData.map(eachCard => (
                <li key={eachCard.id} className={`card card${eachCard.id}`}>
                    <img src={eachCard.iconUrl} alt={eachCard.title} className='card-icon'/>
                    <p className='card-title'>{eachCard.title}</p>
                    <p className='card-value'>{eachCard.value}</p>
                </li>
            ))}
           </ul>
        </div>

    )

 


    return(
        <div className="layout">
            <div className='show-nav-'>
            <SideBar/>
            </div>
            
            <div className='main-layout'>
                <Header/>
                <Cards/>
                <ActivitiesLineChart/>
                <div className='footer-container'>
                    <ProductsPieChart/>
                    <Schedule/>
                </div>
            </div>
            
        </div>
    )
}

export default DashBoard