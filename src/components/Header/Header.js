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
            <li className='mr2 lg:mr-5 cursor-pointer'><span >products</span></li>
            <li className='mr2 lg:mr-5 cursor-pointer'><span >solutions</span></li>
            <li className='mr2 lg:mr-5 cursor-pointer'><span >servics</span></li>
            <li className='mr2 lg:mr-5 cursor-pointer'><span >about us</span></li>
            <li className='mr2 lg:mr-5 cursor-pointer'><span >contact us</span></li>
        </>
    }


    return (
        <div className='px-10 md:px-16 xl:px-20 bg-base-100 z-50 sticky top-0'>
            <div className="navbar bg-banner-1 bg-cover bg-no-repeat justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase">
                            {headerItems()}

                        </ul>
                    </div>
                    <span className="btn btn-ghost normal-case text-xl">iMerit</span>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 uppercase">
                        {headerItems()}
                    </ul>
                </div>
                <div className="navbar-end">
                    <span className='cursor-pointer'>
                        <span onClick={handleNightMode}>
                            {
                                isNight ?
                                    <img src="/assets/sun.png" className='w-10' alt="" />
                                    :
                                    <img src="/assets/moon.png" className='w-10' alt="" />
                            }
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Header;