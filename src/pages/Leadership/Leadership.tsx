import './Leadership.css'
import image from '../../assets/alice.jpeg'
const Leadership = () => {
  return (
    <div>
      <LeadershipTeam />  
    </div>
  )
}

export default Leadership

function LeadershipTeam() {
  return (
    <div className="leadership-section">
      <div className="title">
        <h5>Meet the team in charge</h5>
      </div>
      <div className="team-lead">    
        <div className="lead-image">  
                  <img src={image} alt="Image" />  
        </div>      
        <div className="desc">
          <h3>Name</h3>  
          <h4>Role</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita recusandae quam consequuntur consequatur, illo vero animi velit facilis nemo maxime explicabo veritatis, ratione dolorum nobis voluptatibus ab, est deleniti?</p>
          <div className="social-links">
            fafafaf
          </div>
        </div>  
      </div>        
      
    </div>
  )
}