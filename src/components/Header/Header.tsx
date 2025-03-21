import Logo from "../Logo/Logo"

import './Header.css'
const Header = () => {
  return (
    <header>
      <HeaderNavDetails />
    </header>
  )
}

export default Header

function HeaderNavDetails() {
  return (
    <div className="header-nav-details">
      <Logo />
      <HeaderNav />
      <button>Explore</button>
    </div>
  )
}
function HeaderNav() {
  return (
   <nav className="header-nav">
    <ul>
      <li>Home</li>
      <li>Leadership</li>
      <li>Tracks</li>
      <li>Events</li>
    </ul>
    
   </nav>
  )
}
