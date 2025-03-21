import LogoImg from '../../assets/logo.png'
import './Logo.css'
const Logo = () => {
  return (
    <div className="logo">
        <div className="image-wrapper">
            <img src={LogoImg} alt="logo" />            
        </div>
        <h4>Murang'a University Tech Club</h4>     
    </div>
  )
}

export default Logo