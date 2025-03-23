import logo from '../../assets/logo.png'
import { FaGithub ,FaFacebook, FaLinkedin,FaInstagram} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



import './Footer.css'
const Footer = () => {
  return (
    <div>
      <FooterSection />
      <CopyRight />
    </div>
  )
}

export default Footer

function FooterSection() {
  return (
    <div className='footer-section'>
      <div className='logo'>
        <div className="img-w">
            <img src={logo} alt="Logo Image" />
         </div>   
        <h4>Murang'a University Tech Club</h4>     
     </div>
      <div className='links'>
        <h3>Navigation</h3>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Leadership</a>
          </li>
          <li>
            <a href="#">Tracks</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>        
      </div>
      <div className='communities'>
        <h3>Communities</h3>
        <div className="links">
            <ul>
                <li>
                    <a href="#">Discord</a>
                </li>
                <li>
                   <a href="#"> Github</a>
                </li>
                <li>
                    <a href="#">CodeNewbie</a>
                </li>
                <li><a href="#">Leetcode</a></li>
                <li><a href="#">Baddies in tech</a></li>
            </ul>
        </div>
        
      </div>
      <div className='socials'>
        <h3>Follow Us</h3>    
        <div className="icons">
            <FaGithub />
            
            <FaXTwitter />
            <FaFacebook />
            <FaLinkedin />
            <FaInstagram />

        </div>          
      </div>
    </div>
  )
}

function CopyRight() {
  return (
    <div className='copy-right'>
        <p>
            &copy; 2025 MUTC. All rights reserved
        </p>
    </div>
  )
}
