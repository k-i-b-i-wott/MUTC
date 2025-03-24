import './Leadership.css'
import { ReactNode } from 'react';
import image from '../../assets/alice.jpeg'

import { FaFacebookF,FaLinkedinIn,FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Patron from '../../assets/images/prof.jpeg'
import ChairpersonImg from '../../assets/images/web-dev-lead.jpg'
import SecretaryImg from '../../assets/images/sec.jpeg'
import PowerPlatfromImg from '../../assets/images/power-platform-lead.jpeg'
import WebTeamImg from '../../assets/images/web-dev-lead.jpeg'
import TreasurerImg from '../../assets/images/treasurer.jpeg'
import ViceImg from '../../assets/images/vice-chair.jpg'
import CyberSecImg from '../../assets/images/cyber-sec-lead.jpg'
import MobileImg from '../../assets/images/mobile-dev.jpg'
import CloudImg from '../../assets/images/cloud.jpeg'
import UiDesignerImg from '../../assets/images/ui-ux.jpeg'

interface leadership{
  image: string;
  name: string;
  role: string;
  description: string
  icons: ReactNode[]
}
const Leadership = () => {
  const details: leadership[]=[
    {
      image: Patron,
      icons: [<FaFacebookF />,<FaLinkedinIn />,<FaXTwitter/>],
      name: "Dr. John Ndia",
      role:"Patron of MUTC",
      description: " Dr. John Ndia is an Associate Professor in the School of Computing and Information Technology at Murang'a University. With over 15 years of experience in academic research and teaching, Dr. Ndia specializes in artificial intelligence, machine learning, and cybersecurity. He has published numerous papers in international journals and has been instrumental in establishing partnerships between the university and tech industry leaders. As patron of the Murang'a University Tech Club, Dr. Ndia provides guidance, mentorship, and strategic direction to help students develop practical skills that complement their academic learning. His vision is to see the club produce industry-ready graduates who will drive innovation in Kenya's tech ecosystem."
    },
    {
      image: ChairpersonImg,
      name: "Victory Njeri",
      icons: [<FaFacebookF />,<FaLinkedinIn />,<FaXTwitter/>, <FaInstagram />],
      role:"ChairPerson",  
      description: "Victory Njeri is a fourth-year Computer Science student with exceptional leadership and organizational skills. She previously served as the club's secretary before being elected chairperson. Victory is passionate about artificial intelligence and cloud computing, having completed internships at Microsoft and local tech startups. Under her leadership, the club has expanded its membership by 70% and established new partnerships with industry players. She aims to create a vibrant tech community that prepares students for global opportunities."
    },
    {
      image: ViceImg,
      icons: [<FaFacebookF />,<FaLinkedinIn />,<FaXTwitter/>, <FaInstagram />],
      name: "Allan Muhari",
      role:"Vice Chairperson",
      description:"Allan Muhari is a third-year Software Engineering student with a strong background in backend development and systems architecture. He has contributed to several open-source projects and won the university's hackathon two years in a row. Allan is skilled in Python, Java, and cloud technologies, having earned AWS and Google Cloud certifications. As vice chairperson, he focuses on coordinating technical workshops and coding challenges that enhance members' practical skills."
    },
    {
      image: SecretaryImg,
      name: "Bridget Gitonga",
      icons: [<FaLinkedinIn />,<FaXTwitter/>],
      role:"Secretary",
      description:"Bridget Gitonga is a second-year Information Technology student with exceptional organizational and communication skills. She manages all club documentation, meeting minutes, and correspondence with external partners. Bridget has a background in technical writing and content creation, having interned at a leading tech blog. She is passionate about data science and visualization, currently learning R and Python for data analysis. Bridget ensures smooth information flow within the club and maintains comprehensive records of all activities."
    },
    {
      image: TreasurerImg,
      name: "Ruth Mutisya",
      icons: [<FaInstagram/>, <FaLinkedinIn/>],
      role:"Treasurer",
      description:"Ruth Mutisya is a third-year Business Information Technology student with a minor in Finance. She manages the club's finances, prepares budgets for events, and ensures transparent use of resources. Ruth has previous experience as a finance intern at a tech startup and brings valuable insights on financial management to the team. She is skilled in accounting software and spreadsheet analysis. Outside of her treasurer duties, Ruth is interested in fintech innovations and blockchain technology."
    },
    {
      image: CyberSecImg,
      name: "Webster Ifedha",
      icons: [<FaFacebookF />,<FaLinkedinIn />,<FaXTwitter/>, <FaInstagram />],
      role:"cyber security lead.",
      description:"Webster Ifedha is a fourth-year student specializing in Information Security. He holds multiple certifications including CompTIA Security+ and Certified Ethical Hacker. Webster leads the cybersecurity track, organizing workshops on secure coding practices, penetration testing, and security awareness. He has participated in several CTF competitions and bug bounty programs with notable success. Under his leadership, the cybersecurity team has grown to become one of the most active groups within the club."
    },
    {
      image: UiDesignerImg,
      name:"Manase Gunga",
      icons: [<FaFacebookF />,<FaLinkedinIn />,<FaXTwitter/>, <FaInstagram />],
      role: "UU/UX Design Lead",
      description:"Manase Gunga is a third-year student with exceptional design skills and an eye for aesthetics. He leads the UI/UX track, conducting workshops on design thinking, user research, prototyping, and usability testing. Manase has freelance experience designing for local businesses and startups. His portfolio includes mobile applications and web interfaces that have received recognition for their intuitive design. He is proficient in Figma, Adobe XD, and Sketch, and encourages club members to focus on human-centered design principles."
    },
    {
      image: WebTeamImg,
      name:"Carolyne Githenduka ",
      icons: [<FaFacebookF />,<FaLinkedinIn />,<FaXTwitter/>, <FaInstagram />],
      role:"Web Development Lead",
      description:"Carolyne Githenduka is a talented fourth-year student who excels in full-stack web development. She leads the web development track, organizing workshops on frontend frameworks, backend technologies, and deployment strategies. Carolyne has interned at a leading software development company and contributed to several client projects. She is proficient in React, Node.js, and Django, and has mentored numerous club members in building their first web applications. Her team maintains the club's website and helps develop web solutions for university departments"
    },
    {
      image: MobileImg,
      name:"Stanley Amunze ",
      icons: [<FaFacebookF />,<FaLinkedinIn />,<FaXTwitter/>, <FaInstagram />],
      role:"Mobile Apps Development Lead",
      description:"Stanley Amunze leads the mobile applications development track with expertise in both Android and iOS platforms. A third-year Computer Science student, Stanley has published several apps on Google Play and has experience with cross-platform frameworks like Flutter and React Native. He organizes regular coding sessions and app development challenges for club members. Stanley is known for his problem-solving abilities and has mentored several students who have gone on to secure internships at mobile development companies"
    },
    {
      image: CloudImg,
      name:"Paul Karanja ",
      role:"Cloud Engineering Lead",
      icons: [<FaFacebookF />,<FaLinkedinIn />,<FaXTwitter/>, <FaInstagram />],
      description:"Paul Karanja is a fourth-year student with deep expertise in cloud technologies and DevOps practices. He leads the cloud engineering track, conducting workshops on AWS, Azure, and Google Cloud Platform. Paul holds several cloud certifications and has experience in setting up CI/CD pipelines, containerization, and infrastructure as code. He previously interned at a cloud consulting firm and brings industry best practices to the club. Under his leadership, the cloud engineering team has successfully deployed numerous student projects to production environments."
    },
    {
      image:PowerPlatfromImg,
      name:"Evyonn Mbithe",
      role:"Power Platform Lead",
      icons: [<FaFacebookF />,<FaLinkedinIn />,<FaXTwitter/>, <FaInstagram />],
      description:"Evyonn Mbithe specializes in Microsoft Power Platform and low-code development solutions. A third-year Business Information Technology student, she is a Microsoft Certified Power Platform Developer and has helped several campus departments automate their workflows. Evyonn leads workshops on Power Apps, Power Automate, and Power BI, teaching students how to build business solutions without extensive coding. She is passionate about business process automation and has implemented several solutions that have improved efficiency in student organizations and administrative departments.",
    },
    
  ]
  
  return (
    <div className="lead-section">
      <div className="head">
      <h1>Our Leadership Team</h1>
      <p>Meet the dedicated individuals driving innovation and excellence at MUTC</p>
      </div>
      <div className='leadership'>      
          {
            details.map((detail, index) => (
              
              <div className="leadership-section">
              <div key={index} className="leadership-item">
                <div className="team-lead-image">
                    <img src={detail.image} alt="Leadership" />
                </div>
                <div className="desc">
                  <h2>{detail.name}</h2>      
                  <h3>{detail.role}</h3>
                  <p>{detail.description}</p> 
                  <h4>Get in Touch</h4>
                  <div className="social-icons">
                    {
                      detail.icons.map((icon, index) => (
                        <span key={index}>{icon}</span>
                      ))
                    }
                  </div>
                </div>
              </div>
              </div>             
              
            ))
          }  
          </div>
    </div>
  )
}

export default Leadership





