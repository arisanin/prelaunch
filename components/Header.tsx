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
                    <a href="mailto:hello@arisanin.com" target="_blank" rel="noopener noreferrer" className='text-aris-grey hover:underline'>Hubungi Kami</a>
                    <span> / </span>
                    <a href="https://status.arisanin.com/" target="_blank" rel="noopener noreferrer" className='text-aris-grey hover:underline'>Status</a>
                </p>
            </div>
        </div>
    )
}

export default Header
