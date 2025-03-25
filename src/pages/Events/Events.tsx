import { FcGlobe } from "react-icons/fc";
import { CiClock1 } from "react-icons/ci";
import './Events.css'

interface events {
    nameIcon: string
    name: string
    day: string
    time: string
    timeIcon: string
    location: string
    instructor: string
    classname: string
    
}


const Events = () => {
  return (
    <div className='events-section'>
        <h2>MUTC Weekly Activities</h2>
        <p>Empowering Tech Learning, One Workshop at a Time</p>
        <div className="events-container">
            <div className="events-card">
                <div className='title'>
                    <div className="titleIcon">
                          <FcGlobe />
                    </div>
                    <div className="titleDesc">
                        <h2>    Web  Development</h2>
                        <h5>Every Monday</h5>
                    </div>
                </div>
                <div className='time'>
                    <h4><CiClock1 /></h4>                
                    <h5>7:30PM - 9:00PM</h5>    
                </div>
                <div className='ints'>
                    <p><strong>Instructor:</strong>Carolyne Githenduka</p>
                </div>
                <div className='location'>
                    <p><strong>Location:</strong>Room 1</p>
                </div>
            </div>
        
        </div>      
    </div>
  )
}

export default Events
