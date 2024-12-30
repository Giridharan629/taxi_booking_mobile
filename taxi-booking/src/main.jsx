import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './components/hero/Hero'
import Nav from './components/nav/Nav'
import Search from './components/search/Search'
import Details from './components/details/Details'
import More from './components/More/More'
import Slates from './components/Slates/Slates'
import About from './components/About/About'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    <Search/>
    <Hero/>
    <Details/>
    <More/>
    <Slates/>
    <About/>
  </StrictMode>
)
