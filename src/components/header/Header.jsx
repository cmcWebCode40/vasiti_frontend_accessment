import React from 'react'
import AppBarView from './appBar/AppBar'
import NavBarList from './navBarList/NavBarList'

const Header = () => {
  return (
    <header>
      <AppBarView />
      <NavBarList />
    </header>
  )
}

export default Header
