import React from 'react'

function Header(props) {
    const headerStyles = {
        backgroundColor: 'blue',
        color: 'red'
    }
  return (
    <header style={headerStyles} >
      <div className="container">
        <h2>FeedBack UI </h2>
      </div>
    </header>
  )
}

export default Header
