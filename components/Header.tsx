import React, { ReactElement } from 'react'
import Logo from '../public/Logo'
import LogoIcon from '../public/LogoIcon'
import Link from 'next/link'

function Header(): ReactElement {
    return (
        <div className='flex flex-row items-center justify-between px-5 sm:px-16 lg:px-28 mt-12'>
            <Link href="/">
                <div>
                    <Logo className='cursor-pointer hidden sm:block' />
                    <LogoIcon className='cursor-pointer sm:hidden' />
                </div>
            </Link>
            <div>
                <p className='text-aris-blue text-lg'>
                    <a href="https://github.com/arisanin" target="_blank" rel="noopener noreferrer" className='text-aris-grey hover:underline'>GitHub</a>
                    <span> / </span>
                    <a href="https://linkedin.com/company/arisanin" target="_blank" rel="noopener noreferrer" className='text-aris-grey hover:underline'>Linkedin</a>
                    <span> / </span>
                    <a href="mailto:hello@arisanin.com" target="_blank" rel="noopener noreferrer" className='text-aris-grey hover:underline'>Email</a>
                    <span> / </span>
                    <a href="gpg.txt" target="_blank" rel="noopener noreferrer" className='text-aris-grey hover:underline'>GPG Key</a>
                </p>
            </div>
        </div>
    )
}

export default Header
