import { Routes, Route } from 'react-router-dom'

import Navigation from "./components/Navigation/Navigation"
import Home from './components/Home/Home'
import Header from "./components/Header/Header"
import Modal from "./components/Modal/Modal"
import Footer from "./components/Footer/Footer"
import About from './components/About/About'
import Shop from './components/ShopArt/ShopArt'
import Contacts from './components/Contacts/Contacts'
import SellYourArt from './components/SellYourArt/SellYourArt'
import Profile from './components/Profile/Profile'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import ShopArtItem from './components/ShopArt/ShopArtItem/ShopArtItem'
import ArtDetails from './components/ArtDetails/ArtDetails'

export default function App() {

  return (
    <>
      <Header />
      <Navigation />
    
      {/* <Modal /> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/contact' element={<Contacts/>} />
        <Route path='/sell' element={<SellYourArt/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/art/:id' element={<ArtDetails/>} />
      </Routes>
      <Footer />
    </>
  )
}