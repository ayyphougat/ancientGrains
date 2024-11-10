import React from 'react'

function Logo({width = '100px',className = ''}) {
  return (
    <img src="https://cdn-icons-png.flaticon.com/512/506/506537.png" alt="logo" className={`h-10 w-10 ${className}`} />
  )
}

export default Logo
