import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import SecondaryNav from './components/SecondaryNav/SecondaryNav.jsx'
import HeroBanner from './components/Hero/HeroBanner.jsx'
import CategoryCard from './components/Category/CategoryCard.jsx'

function App() {

  return (
    <div className='overflow-x-auto whitespace-nowrap hide-scroll'>
      <Navbar />
      <SecondaryNav />
      <HeroBanner />
      <CategoryCard />
    </div>
  )
}

export default App
