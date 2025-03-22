import './Hero.css'
import Video from '../../assets/heroVideo.mp4'

const Hero = () => {
  return (
    <div className='hero-section'>
        <video src={Video} autoPlay loop muted />
    <div className="content">
        <h1>
            Building the Tech Leaders of Tomorrow
        </h1>
        <p>
             Murang'a University Tech Club (MUTC) is a community of passionate developers, designers, and innovators committed to advancing technology and programming skills. Join us and be part of the tech revolution!.
        </p>   
        <button className='cta-button'>Join MUTC Today</button>         
    </div>   
    </div>
  )
}

export default Hero
