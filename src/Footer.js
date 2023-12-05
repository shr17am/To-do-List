import React from 'react'

const Footer = ({length}) => {
  return (
    <footer>
      {length} List {length<2 ? "item":"items"}
    </footer>
  )
}

export default Footer
