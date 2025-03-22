import './About.css'

export const About = () => {
  return (
    <div>
        <AboutSection />
    </div>
  )
}

function AboutSection() {
  return (  
    <div className="about-section">
       <div>
        <h3>About us</h3>
       </div>
       <div className='intro'>
        <div>
            <h3>Who we are</h3>
            <p>
                Murang'a University Tech Club (MUTC) is a dynamic student-led organization dedicated to advancing technology, innovation and programming skills among students.
                We provide an inclusive space for learners,developers, designers and tech enthusisats to collaborate learn and grow together.
            </p>
        </div>
        <div>
            <h3>What we do</h3>
            <p>
                MUTC fosters a supportive environment where students can learn, share, and connect with like-minded individuals.
                We offer a range of activities, workshops, and events to keep our members engaged and motivated.
            </p>
            <ul>
                <li>
                    Weekly Tech Sessions
                </li>
                <li>
                    Hackathons and Competition
                </li>
                <li>Industry Networking</li>
                <li>Open source Projects</li>
                <li>Tech Talks and Guest speakers</li>
            </ul>
        </div>
         
       </div>
       <div>
        <div>
            <h3>Our Mission</h3>
            <p>
                To empower studenrts with knowledge and skills needed to excel in the ever-evolving world of technology through hands-on learning, mentorship,ollaboration and innovation.
            </p>
        </div>
        <div>
            <h3>Our Core Values</h3>
            <ul>
                <li>
                    <strong>Collaboration </strong> We believe in teamwork and the power of knowledge-sharing. 
                </li>
                <li>
                    <strong>Innovation</strong> We encourage creative problem-solving and out-of-the-box thinking. 
                </li>   
                <li>Excellence</li> We strive for the highest standards in all our projects and initiatives.

                <li>
                  < strong>Inclusivity</strong>  We welcome students of all skill levels, from beginners to advanced tech enthusiasts.
                </li>
                <li>
                    <strong>Continous Learning</strong>   We stay ahead of trends by exploring emerging technologies.
                </li>
               </ul> 
        </div>
       </div>
    </div>
  )
}
