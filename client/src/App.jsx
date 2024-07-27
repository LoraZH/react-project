import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import * as authService from './services/authService'

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
import ArtDetails from './components/ArtDetails/ArtDetails'
import Cart from './components/Cart/Cart'
import NotFound from './components/NotFound/NotFound'
import AuthContext from './contexts/authContext'
import Path from './paths'
import Logout from './components/Logout/Logout'


export default function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.psw);

    setAuth(result);
    navigate(Path.Home);
  };

  const registerSubmitHandler = async (values) => {
    const result = await authService.register(values.email, values.psw);

    setAuth(result);
    navigate(Path.Home);
  }
  const logoutHandler = () => {
    setAuth({});

  }

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    loginSubmitHandler,
    username: auth.username || auth.email,
    email: auth.email,
    isAuthenticated: !!auth.email,
  }

  return (
    <AuthContext.Provider value={values}>
      <>
        <Header />
        <Navigation />

        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contacts />} />
          <Route path='/sell' element={<SellYourArt />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/art/:artId' element={<ArtDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path={Path.Logout} element={< Logout />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </>
    </AuthContext.Provider>
  )
}