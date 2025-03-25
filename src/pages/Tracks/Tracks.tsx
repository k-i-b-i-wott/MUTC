import './Tracks.css'

import image from '../../assets/about.jpeg'

interface tracks{
  trackName:string
  image:string
  trackDescription: string
  trackSkills: string[]
}


const Tracks = () => {
  const trackInfo:tracks[]=[
    {
      image:image,
      trackName: "Web Development Track",
      trackDescription: "Become a full-stack web development expert with in-depth training in both front-end and back-end technologies.  The track covers:",
      trackSkills:[
        "Front-end development (HTML, CSS, JavaScript)",
        "Back-end technologies (Node.js, Express)",
        "Database management",
        "Responsive web design principles",       
        "Design and develop complete web applications",
        "Create scalable and robust websites",
       " Deploy full-stack solutions",
      ]
    },
    {
      image:image,
      trackName: "Cloud Engineering Track",
      trackDescription: "Explore the cutting-edge world of cloud computing and infrastructure. The track offers in-depth knowledge of:",
      trackSkills:[
        "Cloud service providers (AWS, Google Cloud, Microsoft Azure)",
        "Cloud architecture design",
        "Virtualization and containerization",
        "DevOps practices",
        "Design and manage cloud infrastructures",
        "Ensure high availability of cloud-based services",
        "Implement scalable and secure cloud solutions",
      ]
    },
    {
      trackName: "CyberSecurity",
      image: image,
      trackDescription:"Dive into the critical world of digital protection. This track equips you with essential skills to safeguard systems, networks, and data from sophisticated cyber threats. You'll explore:",
      trackSkills:[
        "Security protocols and ethical hacking",
        "Advanced encryption techniques", 
        "Comprehensive threat analysis",
        "Network vulnerability assessment",
        "Incident response strategies",
        "Cybersecurity best practices"
      ]
    },

    {
      trackName: " UI/UX Design Track",
      image:image,
      trackDescription: "Master the art of creating intuitive and visually compelling digital experiences. This track provides comprehensive training in user-centered design, covering:",
      trackSkills:[
        "User research methodologies",
        "Wireframing and prototyping techniques",
        "Usability testing principles",
        "Industry-standard design tools",
        "Develop the skills to create",
        "Intuitive user interfaces",
        "Engaging user experiences",
        "Designs for websites and mobile applications",
      ]
    },
 
    {
      image:image,
      trackName:"Mobile Apps Development Track",
      trackDescription:"Learn to build powerful mobile applications for multiple platforms. This track provides comprehensive training in:",
      trackSkills:[
        "Android and iOS development",
          "Programming languages: Java, Kotlin, Swift, Dart",
          "Mobile app design principles",
          "Performance optimization techniques",
          
          "Create user-friendly mobile applications",
          "Test and deploy smartphone and tablet apps",
          "Develop high-performance mobile solutions",
      ]
    },
   
    {
      image: image,
      trackName: "Power Platform Track",
      trackDescription: "Unlock the potential of Microsoft's powerful business solution tools. ",
      trackSkills:[
        "Power BI for data analytics",
        "Power Apps for custom business applications",
        "Power Automate for workflow optimization",
        "Power Virtual Agents for chatbot development",

        "Create data-driven business solutions",
        "Automate complex organizational processes",
        "Build integrated business applications with minimall coding",
      ]
    }
    
  ]
  return (
    <div className='items-wrap'>
      <h1>MUTC Specialized Tracks</h1>
      <div className="items">
        {
          trackInfo.map((track,index)=>(
            <div key={index} className='track-card'>  
            <div className="trackImg">
              <img src={track.image} alt="Image" />
            </div>
           <div className="track-details">
            <h2>{track.trackName}</h2>
            <p>{track.trackDescription}</p>
            <ul>
              {
                track.trackSkills.map((skills,i)=>(
                  <li key={i}>
                    {skills}
                  </li>
                ))
              }
            </ul>
            <div className="apply">
              <button><a href="#">Enroll</a></button>
            </div>
          </div>

          
      
          </div>

          ))
        }
      
      </div>
      <div className="register">
        <h3>Register For your Suitable Track in the form below</h3>

        <form action="">
          <input type="text" placeholder='FullName'/>
          <input type="email" placeholder='Email Address'/>
          <input type="text" placeholder='Current Course of Study'/>
          <input type="number" placeholder='Year of Study'/>
          <select name="" id="">
            <option value="">Select Track</option>
            <option value="Front-end Development">Front-end Development</option>
            <option value="Back-end Development">Back-end Development</option>
            <option value="Cloud Engineering Track">Cloud Engineering Track</option>
            <option value="CyberSecurity">CyberSecurity</option>
            <option value="UI/UX Design Track">UI/UX Design Track</option>
            <option value="Mobile Apps Development Track">Mobile Apps Development Track</option>
            <option value="Power Platform Track">Power Platform Track</option>
          </select>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Tracks


