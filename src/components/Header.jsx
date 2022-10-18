/* This example requires Tailwind CSS v2.0+ */
import { useState, useContext, useEffect } from 'react'
import { Link, NavLink} from "react-router-dom";
import UserContext from '../context/UserContext'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../assets/img/Logo.jpg'

const navigation = [
  { id: 1, name: 'Inicio', href: '/', current: true },
  { id: 2, name: 'Fincas', href: 'fincas', current: false },
  { id: 3, name: 'Obreros', href: 'obreros', current: false },
  { id: 4, name: 'Compras', href: 'compras', current: false },
  { id: 5, name: 'Ventas', href: 'ventas', current: false },
]


 const Header = ()=> {
    const [activeMenuPerfin, setActiveMenuPerfin] = useState(false)
    const [menuHamburger, setMenuHamburger] = useState(true)
    const {dataUser, updateDataUser} = useContext(UserContext)
    return(
            <nav className="bg-orange-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button onClick={()=>setMenuHamburger(!menuHamburger)} type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        {menuHamburger?
                         <XMarkIcon className="block h-6 w-6"/>:
                         <Bars3Icon className="block h-6 w-6" />
                         

                        }
                        
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                        <img className="block rounded-full h-10 w-auto lg:hidden" src={Logo} alt="Your Company"/>
                        <img className="hidden rounded-full h-10 w-auto lg:block" src={Logo} alt="Your Company"/>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                        {dataUser.token ?
                        <div className="flex space-x-4">
                            {navigation.map((menu)=>{
                                return(
                                    <NavLink
                                        key={menu.id} to={menu.href}
                                        className={({ isActive }) =>
                                            isActive ? "bg-green-900 text-white px-3 py-2 rounded-md text-sm font-medium" : 
                                            "text-gray-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                            }
                                        >
                                        {menu.name}
                                    </NavLink>
                                    
                                )
                            })}
                            
                        </div>
                        :
                        ''
                        }
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" className="rounded-full bg-orange-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6 rounded-full"/>
                        </button>
                        <div className="relative ml-3">
                        <div>
                            <button onClick={()=>setActiveMenuPerfin(!activeMenuPerfin)} type="button" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                            </button>
                        </div>

                    
                        <div className={activeMenuPerfin ? "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none":" invisible absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="user-menu-item-0">Perfil {dataUser.userName}</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="user-menu-item-1">Settings</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="user-menu-item-2">Sign out</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="sm:hidden" id="mobile-menu">
                    <div className={!menuHamburger ? "hidden":"space-y-1 px-2 pt-2 pb-3" }>
                    {navigation.map((menu)=>{
                                return(
                                    <NavLink
                                        key={menu.id} to={menu.href}
                                        className={({ isActive }) =>
                                            isActive ? "bg-orange-900 text-white block px-3 py-2 rounded-md text-base font-medium":
                                            "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                            }
                                        >
                                        {menu.name}
                                    </NavLink>
                                    
                                )
                    })}
                    
                    </div>
                </div>
            </nav>

       

    )
 }
export default Header
