import Link from 'next/link'
import React from 'react'

const LogoText = ({text}) => {
  return (
    <Link className='flex justify-center' href="/">
     {text}
    </Link>
  )
}

export default LogoText