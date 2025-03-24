
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Leadership from './pages/Leadership/Leadership'
const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/leadership' element={<Leadership />} />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App