import Logo from "../Logo/Logo"

import  {NavLink} from 'react-router-dom'


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
     <NavLinks to={"/"} linkName={"Home" }/>
     <NavLinks to={"/leadership"} linkName={"Leadership"} />
     <NavLinks to="/tracks" linkName="Tracks"/>
     <NavLinks to="/events" linkName="Events" />
     
    </ul>    
   </nav>
  )
}


function NavLinks({to, linkName}: {to: string, linkName: string}) {

  return (
    <li className="header-nav-link">
      <NavLink to={to}>{linkName}</NavLink>
    </li>
  )
}
