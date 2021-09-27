import { Link } from 'gatsby'
import React from 'react'

const Navbar = () => {
  const links = [
    {
      id: '1',
      name: 'Home',
      path: '/',
    },
    {
      id: '2',
      name: 'Properties',
      path: '/properties',
    },
    {
      id: '3',
      name: 'About',
      path: '/about',
    },
  ]
  return (
    <div>
      <div>
        <Link to='/'>Golekno</Link>
        {links.map(link => (
          <Link key={link.id} to={link.path}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar
