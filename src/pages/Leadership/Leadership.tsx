import './Leadership.css'
import image from '../../assets/alice.jpeg'
import { FaFacebookF } from "react-icons/fa";
const Leadership = () => {
  return (
    <div className="lead-section">
      <h1>Meet the Team</h1>
      <div className='leadership'>
          <LeadershipTeam />  
          <LeadershipTeam />   
          <LeadershipTeam />   
          <LeadershipTeam />        
    </div>
    </div>
  )
}

export default Leadership

function LeadershipTeam() {
  return (
    <div className="leadership-section">    
      <div className='team-lead-image'>
        <img src={image} alt="Lead" />
      </div>
      <div className='desc'>
        <h2>Name</h2>      
        <h3>Role</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, atque.</p>
        <div className="social-icons">
          <FaFacebookF />
          <FaFacebookF />
          <FaFacebookF />
          <FaFacebookF />
        </div>
      </div>  
    
    </div>
  )
}