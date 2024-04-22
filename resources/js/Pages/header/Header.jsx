
import { Link } from '@inertiajs/react';
import { router } from '@inertiajs/core';
import { useEffect, useState } from "react";
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import { Head } from '@inertiajs/react';
import Dropdown from '@/Components/Dropdown';
import DropdownLink from '@/Components/DropdownLink';

import menuData from "./menuData";
const Header = () => {
  const route = useRoute();
  const page = useTypedPage();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };
  function logout(e) {
    e.preventDefault();
    router.post(route('logout'));
  }
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    }
    else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    }
    else {
      setOpenIndex(index);
    }
  };
  return (
    <div>
      <header className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent ${sticky
        ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
        : "absolute"}`}>
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link href="/" className={`header-logo block w-full ${sticky ? "py-5 xl:py-2" : "py-8"} `}>
                <img src="/images/datafc_v_normale.svg" alt="logo" width={140} height={30} className="w-full dark:hidden" />
                <img src="/images/datafc_v_normale.svg" alt="logo" width={140} height={30} className="hidden w-full dark:block" />
              </Link>
            </div>
            <div className="flex ps-5  w-full items-center justify-between px-4">
              <div>
                <button onClick={navbarToggleHandler} id="navbarToggler" aria-label="Mobile Menu" className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 xl:hidden">
                  <span className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? " top-[7px] rotate-45" : " "}`} />
                  <span className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? "opacity-0 " : " "}`} />
                  <span className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? " top-[-8px] -rotate-45" : " "}`} />
                </button>
                <nav id="navbarCollapse" className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark xl:visible xl:static xl:w-auto xl:border-none xl:!bg-transparent xl:p-0 xl:opacity-100 ${navbarOpen
                  ? "visibility top-full opacity-100"
                  : "invisible top-[120%] opacity-0"}`}>
                  <ul className="block xl:flex xl:space-x-12">
                    {menuData.map((menuItem, index) => (<li key={index} className="group relative">
                      {menuItem.path ? (<Link href={menuItem.path} className={`flex py-2 text-base  text-gray-900  group-hover:opacity-70 dark:text-white font-bold xl:mr-0 xl:inline-flex xl:py-6 xl:px-0`}>
                        {menuItem.title}
                      </Link>) : (<>
                        <a href={"#"} onClick={() => handleSubmenu(index)} className="flex font-bold cursor-pointer items-center justify-between py-2 text-base text-gray-900 group-hover:opacity-70 dark:text-white xl:mr-0 xl:inline-flex xl:py-6 xl:px-0">
                          {menuItem.title}
                          <span className="pl-3">
                            <svg width="15" height="14" viewBox="0 0 15 14">
                              <path d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z" fill="currentColor" />
                            </svg>
                          </span>
                        </a>
                        <div className={`submenu relative top-full left-0 rounded-md bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark xl:invisible xl:absolute xl:top-[110%] xl:block xl:w-[250px] xl:p-4 xl:opacity-0 xl:shadow-lg xl:group-hover:visible xl:group-hover:top-full ${openIndex === index ? "block" : "hidden"}`}>
                          {menuItem.submenu.map((submenuItem, i) => (<Link href={submenuItem.path} key={i} className="block rounded py-2.5 text-sm text-gray-900 hover:opacity-70  dark:text-white xl:px-3">
                            {submenuItem.title}
                          </Link>))}
                        </div>
                      </>)}
                    </li>))}
                  </ul>
                </nav>
              </div>
            {!page.props.auth.user ? <div className="flex items-center   justify-end pr-16 xl:pr-0">
                <Link href={route('login')} className=" py-3 px-7 text-base font-bold text-dark hover:opacity-70 max-sm:text-xs dark:text-white md:block">
                  Connecter
                </Link>
                <Link href={route('register')} className="ease-in-up  rounded-md bg-primary py-3 max-sm:text-xs max-sm:py-2   px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 xl:px-6 xl:px-9">
                  S'inscrire
                </Link>
              </div > :
              <div className='grid grid-cols-2 ' ><div className="-ms-16 sm:flex sm:items-center sm:ml-6">
                  {/* <!-- Settings Dropdown --> */}
                  <div className="ml-3 relative">
                    <Dropdown align="right" width="48" renderTrigger={() => page.props.jetstream.managesProfilePhotos ? (<button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition">
                      <img className="h-8 w-8 rounded-full object-cover" src={page.props.auth.user?.profile_photo_url} alt={page.props.auth.user?.name} />
                    </button>) : (<span className="inline-flex rounded-md">
                      <button type="button" className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-primary hover:text-primary/80 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-primary/80 active:bg-gray-50 dark:active:bg-primary/80 transition ease-in-out duration-150">
                        {page.props.auth.user?.name}
                        <svg className="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </button>
                    </span>)}>
                      {/* <!-- Account Management --> */}
                      <div className="block px-4 py-2 text-xs text-gray-400">
                        Gérer son compte
                      </div>
                      {!page.props.auth.user.is_admin?<><DropdownLink href={"/Client/Demande"}>
                   Mes Demandes
                                          </DropdownLink>
                    <DropdownLink href={"/Client/profile"}>
                        Mon Compte
                      </DropdownLink>
                      </>
                      :
                      <>
                      <DropdownLink href={"/admin"}>
                                            Dashboard
                                          </DropdownLink>
            <DropdownLink href={route('profile.show')}>
                        Mon Compte
                      </DropdownLink>
                      </>

                      }


                      {page.props.jetstream.hasApiFeatures ? (<DropdownLink href={route('api-tokens.index')}>
                        API Tokens
                      </DropdownLink>) : null}
                      <div className="border-t border-gray-200 dark:border-gray-600"></div>
                      {/* <!-- Authentication --> */}
                      <form onSubmit={logout}>
                        <DropdownLink as="button">Se déconnecter</DropdownLink>
                      </form>
                    </Dropdown>
                  </div>
                </div></div>

              }
            </div>
          </div>

        </div>
      </header>
    </div>);
};
export default Header;
/*  */
