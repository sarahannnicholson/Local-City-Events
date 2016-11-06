import React from 'react'
import { IndexLink, Link } from 'react-router'
import '../../styles/Header.scss'

export const Header = () => (
  <div>
    <h1>React Redux Starter Kit</h1>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/CityEvents' activeClassName='route--active'>
      CityEvents
    </Link>
  </div>
)

export default Header
