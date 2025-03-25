import { ReactNode } from "react";

import { FcGlobe } from "react-icons/fc";
import { CiClock1 } from "react-icons/ci";
import { MdSecurity,MdPhoneIphone} from "react-icons/md";
import { IoCodeDownload } from "react-icons/io5";
import { TbCloudCog } from "react-icons/tb";
import { LuMonitor } from "react-icons/lu";

import './Events.css'

interface events {
    nameIcon:ReactNode
    name: string
    day: string
    time: string
    
    location: string
    instructor: string
    
    
}


const Events = () => {
    const eventDetails: events[] = [
        {
            nameIcon: [<MdSecurity />],
            name: "Cyber Security",
            day: "Every Monday",
            time: "4:00PM - 7:00PM",
            location: "Computer Lab F04",
            instructor: "Webster Ifedha",
            
        },
        {
            nameIcon: [<IoCodeDownload />],
            name: "UI/UX Design",
            day: "Every Tuesday",
            time:"5:00 PM - 8:00 PM",
            location: "Computer Lab F04",
            instructor: "Manase Gunga"
        },
        {
            nameIcon: [<FcGlobe />],
            name: "Web Development",
            day: "Every Wednesday",
            time:"6:00 PM - 9:00 PM",
            location: "Computer Lab F04",
            instructor: "Carolyne Githenduka"
        },
        {
            nameIcon: [<MdPhoneIphone />],
            name: "Mobile Apps Development",
            day: "Every Thursday",
            time:"4:00 PM - 7:00 PM",
            location: "Computer Lab F04",
            instructor: "Stanley Amunze"

        },
        {
            nameIcon: [<TbCloudCog />],
            name: "Cloud Engineering",
            day: "Every Friday",
            time:"3:00 PM - 6:00 PM",
            location: "Computer Lab F04",
            instructor: "Paul Karanja"

        },
        {
            nameIcon: [<LuMonitor />],
            name: " Power Platform",
            day: "Every Saturday",
            time:"1:00 PM - 4:00 PM",
            instructor: "Evyonn Mbithe",
            location: "Computer Lab F04"

        }
    ]
  return (
    <div className='events-section'>
        <h2>MUTC Weekly Activities</h2>
        <p>Empowering Tech Learning, One Workshop at a Time</p>
        <div className="events-container">
            {eventDetails.map((event, index) => (
                <div key={index} className="events-card">
                <div className='title'>
                    <div className="titleIcon">
                          {event.nameIcon}
                    </div>
                    <div className="titleDesc">
                        <h2> {event.name}</h2>
                        <h5>{event.day}</h5>
                    </div>
                </div>
                <div className='time'>
                    <h4><CiClock1 /></h4>                
                    <h5>{event.time}</h5>    
                </div>
                <div className='ints'>
                    <p><strong>Instructor:</strong>{event.instructor}</p>
                </div>
                <div className='location'>
                    <p><strong>Location:</strong>{event.location}</p>
                </div>
                </div>
                
            ))}         
        </div>   
            <div className="announcement">
                <h3>Important Information</h3>
                
                <ul>
                    <li>All sessions are held in Computer Lab F04</li>
                    <li>Bring your laptop and necessary materials</li>
                    <li>Arrive 10-15 minutes early to set up</li>
                    <li>Check for any last-minute schedule updates</li>
                </ul>
            </div>
    </div>
  )
}

export default Events


