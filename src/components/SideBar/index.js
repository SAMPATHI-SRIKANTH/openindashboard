import {Link} from 'react-router-dom'


import './index.css'

const SideBar = () => (
    <div className='sidebar'>
                <div className='sidebar-content'>
                <div className='sidebar-top'>
                <h1 className='sidebar-heading'>Board.</h1>
            </div>
                <ul  className='nav-list'>
                <li  className='nav-item'>
                    <Link to="/dashboard" className="nav-link nav-active">
                    <img src="https://res.cloudinary.com/ssrikanth/image/upload/v1688128117/InstaShare/dashboard_icon_dz6ufu.png" alt="side-bar-icon" className='side-bar-icon'/>
                    DashBoard</Link>
                </li>   
                <li  className='nav-item'>
                    <Link to="/transactions" className="nav-link">
                    <img src="https://res.cloudinary.com/ssrikanth/image/upload/v1688128117/InstaShare/transaction_icon_rwuq9f.png" alt="side-bar-icon" className='side-bar-icon'/>
                    Transactions</Link>
                </li>
                <li  className='nav-item'>
                    <Link to="/schedules" className="nav-link">
                    <img src="https://res.cloudinary.com/ssrikanth/image/upload/v1688128117/InstaShare/schedule_icon_iwg2oo.png" alt="side-bar-icon" className='side-bar-icon'/>
                    Schedules</Link>
                </li>            
                <li  className='nav-item'>
                    <Link to="/users" className="nav-link">
                    <img src="https://res.cloudinary.com/ssrikanth/image/upload/v1688128117/InstaShare/user_icon_gergcf.png" alt="side-bar-icon" className='side-bar-icon'/>
                    Users</Link>
                </li>            
                <li  className='nav-item'>
                    <Link to="/settings" className="nav-link">
                    <img src="https://res.cloudinary.com/ssrikanth/image/upload/v1688128117/InstaShare/setting_icon_ibiqla.png" alt="side-bar-icon" className='side-bar-icon'/>
                    Settings</Link>
                </li>

            </ul>
                </div>
                <div  className='sidebar-bottom'>
            <ul className='nav-list '>
                <li className='f-nav-item'>
                    <Link to="/help" className="nav-link">Help</Link>
                </li>
                <li  className='f-nav-item'>
                    <Link to="/contact-us" className="nav-link">Contact Us</Link>
                </li>
            </ul>
         </div>
    </div>
)

export default SideBar