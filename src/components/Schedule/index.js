import './index.css'

const scheduleCardData = [
    {
        id:1,
        meetingName:'Meeting with suppliers from Kuta Bali',
        time:'14.00-15.00',
        place:'at Sunset Road, Kuta, Bali',

    }
    ,{
        id:2,
        meetingName:'Check operation at Giga Factory 1',
        time:'18.00-20.00',
        place:'at Central Jakarta'
    },
]


const Schedule = () => (
    <div className="schdule-container">
        <div className='schedule-flex'>
            <h1 className='schedule-heading'>Today's schedule</h1>
            <button className='see-all-btn'>See all > </button>
        </div>
        <ul>
            {scheduleCardData.map(each => (
                <li className={`schedule-card schedule-card-${each.id}`} key={each.id}>
                    <h4 className='meeting'>{each.meetingName}</h4>
                    <p className='time'>{each.time}</p>
                    <p className='place'>{each.place}</p>
                </li>
            ))}


        </ul>
    </div>
)

export default Schedule