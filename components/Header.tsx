import React, { ReactElement } from 'react'
import Logo from '../public/Logo'

function Header(): ReactElement {
    return (
        <div className='flex flex-row items-center justify-between px-28 mt-12'>
            <a href="/">
                <Logo className='cursor-pointer' />
            </a>
            <div>
                <p className='text-aris-blue text-lg'>
                    <a href="https://github.com/arisanin" target="_blank" rel="noopener noreferrer" className='text-aris-grey hover:underline'>GitHub</a>
                    <span> / </span>
                    <a href="https://linkedin.com/company/arisanin" target="_blank" rel="noopener noreferrer" className='text-aris-grey hover:underline'>Linkedin</a>
                    <span> / </span>
                    <a href="mailto:arisaninhq@gmail.com" target="_blank" rel="noopener noreferrer" className='text-aris-grey hover:underline'>Email</a>
                </p>
            </div>
        </div>
    )
}

export default Header
