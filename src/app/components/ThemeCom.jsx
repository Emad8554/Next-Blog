'use client'  
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const ThemeCom = ({children}) => {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
  return (
    <div className={theme}>
        <div className='bg-white text-gray-600 dark:bg-gray-600 dark:text-white min-h-screen'>{children}</div>
    </div>
  )
}

export default ThemeCom
