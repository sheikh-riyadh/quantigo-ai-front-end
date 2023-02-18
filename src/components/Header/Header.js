import React, { useEffect, useState } from 'react';


const Header = () => {

    const [isNight, setIsNight] = useState(false)
    const handleNightMode = () => {
        /* Set Night boolean value in local-storage */
        localStorage.setItem('theme-color', !isNight)
        /* Change value */
        setIsNight(!isNight)

    }
    useEffect(() => {
        /* Get value from local-storage */
        const checkNight = localStorage.getItem('theme-color')
        /* Check Night true or false */
        if (checkNight === 'true') {
            /*If true add night mood */
            document.documentElement.setAttribute("data-theme", 'night')
            setIsNight(true)
        } if (checkNight === 'false') {
            /* If false add light mood */
            document.documentElement.setAttribute("data-theme", 'light')
        }
    }, [isNight])

    const headerItems = () => {
        return <>
            <li className='mr2 lg:mr-5'><a href='/home'>product</a></li>
            <li className='mr2 lg:mr-5'><a href='/all-products'>solutions</a></li>
            <li className='mr2 lg:mr-5'><a href='/all-products'>service</a></li>
            <li className='mr2 lg:mr-5'><a href='/all-products'>about us</a></li>
            <li className='mr2 lg:mr-5'><a href='/all-products'>contact us</a></li>
            {
                <li onClick={handleNightMode}>
                    {
                        isNight ?
                            <img src="/assets/sun.png" className='w-14' alt="" />
                            :
                            <img src="/assets/moon.png" className='w-14' alt="" />
                    }
                </li>
            }

        </>
    }


    return (
        <div className='px-10 md:px-16 xl:px-20 bg-base-100 z-50 sticky top-0'>
            <div className="navbar bg-banner-1 bg-cover bg-no-repeat">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {headerItems()}

                        </ul>
                    </div>
                    <a href='/' className="btn btn-ghost normal-case text-xl">iMerit</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {headerItems()}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;