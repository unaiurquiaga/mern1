import { NavLink, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className="content">
      <div className="app_bar">
        <nav className="navbar">
          <NavLink to="">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
      <main className='outlet'>
        <Outlet />
      </main>
      <footer>Created by Unai Urquiaga with ♥</footer>
    </div>
  )
}

export default App
