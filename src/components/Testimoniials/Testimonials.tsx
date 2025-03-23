
import './Testimonials.css'
import doe from '../../assets/doe.jpg'
import alice from '../../assets/alice.jpeg' 
import bob from '../../assets/bob.jpeg' 
import tanui from '../../assets/tanui.jpg'
import jane from '../../assets/jane.jpg'
import brown from '../../assets/brown.jpeg'


interface testimonies{
    name: string
    role: string
    description: string
    image: string
}
const Testimonials = () => {
    const testimony:testimonies[]=[
        {
            image: doe,
            name: "John Doe",
            role: "SoftwareEngineer at Google",
            description: "MUTC played a crucial role in my tech journey. The hands-on coding sessions and networking events helped me gain real-world experience and land my dream job!"
        },
        {
          image: tanui,
          name: "Brian Tanui",
          role: "Machine Learning Engineer",
          description:"I joined MUTC with no prior coding experience, and now I’m building AI models! This club truly empowers its members to excel in the ever-evolving world of technology."
        },
       {
        image: jane,
        name: "Jane Kelly",
        role: "UI/UX Designer",
        description:"The design workshops at MUTC helped me transition into UI/UX. The mentorship and support I received were invaluable",
       },

       {
        image:alice,
        name: "Alice Smith",
        role: "Frontend Developer",
        description:"MUTC provided me with the tools and resources to become a successful frontend developer. The hands-on projects and mentorship were invaluable!"

       },
       {
        image:bob,
        name: "Bob Johnson",
        role: "Backend Developer",
        description:"MUTC provided me with the tools and resources to become a successful backend developer. The hands-on projects and mentorship were invaluable!"

       },
       {
        image: brown,
        name: "Charlie Brown",
        role: "Fullstack Developer",
        description:"MUTC provided me with the tools and resources to become a successful fullstack developer. The hands-on projects, hackanthons , coding challenges and mentorship were invaluable!"

       },


    ]
  return (
    <div className='testimonials'>
      {
        testimony.map((testimonies,index) => (
            <div key={index} className="testimony">
                <div className="image-wrapper">
                   <img src={testimonies.image} alt="images" />
                </div>
                <div className="testimony-wrapper">
                <h4>{testimonies.name}</h4>
                <h5>{testimonies.role}</h5>
                <p>{testimonies.description}</p>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default Testimonials
