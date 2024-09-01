import React from 'react'
import LogoText from './LogoText'
import ToggleButton from './ToggleButton'

const Header = () => {
  return (
    <header className="fixed top-0 flex w-full justify-center bg-slate-400 blurCustom">
      <div className="flex w-5/6 md:justify-between min-h-16 flex-col mx-4 md:flex-row md:items-center">
        <div className="flex justify-between items-center md:h-auto min-h-16">
          <LogoText text="STUDIO" />
          <ToggleButton/>
        </div>
        <div className='flex justify-center'>
          <ul className='h-44 py-8 md:flex hidden flex-col gap-6 md:flex-row md:h-auto md:py-0 justify-around'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      
    </header>
  )
}

export default Header