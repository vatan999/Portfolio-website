"use client"

import { useTheme } from 'next-themes'
import React from 'react'
import { RiMoonFill, RiSunLine } from 'react-icons/ri'

const ThemeButton = () => {
    const {resolvedTheme, setTheme} = useTheme()
  return (
    <button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light': 'dark')} className='bg-slate-100 p-2 rounded-xl'>
        {/* {resolvedTheme === 'dark' ? 'light' : 'dark'} */}
        {
            resolvedTheme === 'dark' ? <RiMoonFill size={20} color='black' /> : <RiSunLine size={20} color="black" />
        }
    </button>
  )
}

export default ThemeButton