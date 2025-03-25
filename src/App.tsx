
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Leadership from './pages/Leadership/Leadership'
import Tracks from './pages/Tracks/Tracks'
import Events from './pages/Events/Events'
const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/leadership' element={<Leadership />} />
        <Route path='/tracks' element={<Tracks/>} />
        <Route path='/events' element={<Events/>} />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App