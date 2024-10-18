

import React from 'react'
import { HOME_ROUTE } from '../constants/routes';

import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaShopify } from 'react-icons/fa6';
const IconHeader = () => {
  return (
    <>
        <NavLink to="/">
        <Link to={HOME_ROUTE}>
       
        
            <FaShopify className="text-green-600  h-8 w-8  inline mb-4 mr-2" />

            <span className="self-center text-3xl font-semibold font-serif whitespace-nowrap dark:text-white">
              Shopfiy
            </span>
          </Link>
        
          <span className="text-1xl font-semibold text-teal-400">Ghar</span>
        </NavLink>
    </>
  )
}

export default IconHeader
