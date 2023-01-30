import React from 'react'

import ThemeSwitcher from './ThemeSwitcher'

const Header = () => {
    return (
        <header className='bg-white border-b-2  dark:border-[#2b3743] dark:bg-[#2b3743]'>
            <div className="container mx-auto flex items-center justify-between p-3 md:py-3 md:px-0">
                <a href="#" className='font-[500] block p-1 dark:text-white'>Where is the world?</a>
                <ThemeSwitcher />
            </div>
        </header>
    )
}

export default Header