import { NavLink } from 'react-router-dom'

export const Menu = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-md navbar-dark'>
        <div className='container-fluid mx-5'>
          <img className='navbar-brand' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/JSON_vector_logo.svg/40px-JSON_vector_logo.svg.png' />
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'><NavLink className='nav-link' aria-current='page' to='/'>Home</NavLink></li>
              <li className='nav-item'><NavLink className='nav-link' to='/lista'>Lista de Criptomonedas</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
