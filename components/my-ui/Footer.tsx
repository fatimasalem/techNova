import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 text-center text-gray-700 flex flex-row justify-between py-4 px-10 text-xs">
      <p>
        <p>&copy; {new Date().getFullYear()} TechNova Solutions. All rights reserved.</p>
      </p>
      <p>Privacy Policy</p>
    </footer>
  )
}

export default Footer