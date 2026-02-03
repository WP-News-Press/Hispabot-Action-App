import React from 'react';
import { NavLink } from 'react-router-dom';
import type { Category } from '../types';
import { NewspaperIcon, LockClosedIcon, ShieldCheckIcon } from './IconComponents'; 
import { PREMIUM_CATEGORY_ID, PREMIUM_CATEGORY_NAME, VERIFIER_PATH, VERIFIER_NAME } from '../constants';

interface NavbarProps {
  title: string;
  categories: Category[];
}

const Navbar: React.FC<NavbarProps> = ({ title, categories }) => {
  const activeClassName = "bg-sky-700 text-white";
  const inactiveClassName = "text-sky-100 hover:bg-sky-600 hover:text-white";

  return (
    <nav className="bg-sky-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center text-white text-2xl font-bold">
            <NewspaperIcon className="h-8 w-8 mr-2 text-sky-300" />
            {title}
          </NavLink>
          <div className="hidden md:flex space-x-2">
            {categories.map((category) => (
              <NavLink
                key={category.id}
                to={category.id === "general" ? "/" : `/category/${category.id}`}
                className={({ isActive }) =>
                  `${isActive ? activeClassName : inactiveClassName} px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150`
                }
              >
                {category.icon && React.createElement(category.icon, { className: "inline h-5 w-5 mr-1"})}
                {category.name}
              </NavLink>
            ))}
            <NavLink
                key={PREMIUM_CATEGORY_ID}
                to={`/${PREMIUM_CATEGORY_ID}`}
                 className={({ isActive }) =>
                  `${isActive ? activeClassName : inactiveClassName} px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 flex items-center`
                }
              >
                <LockClosedIcon className="inline h-5 w-5 mr-1 text-yellow-400" />
                {PREMIUM_CATEGORY_NAME}
              </NavLink>
            <NavLink
                key={VERIFIER_PATH}
                to={VERIFIER_PATH}
                 className={({ isActive }) =>
                  `${isActive ? activeClassName : inactiveClassName} px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 flex items-center`
                }
              >
                <ShieldCheckIcon className="inline h-5 w-5 mr-1 text-green-400" />
                {VERIFIER_NAME}
              </NavLink>
          </div>
        </div>
      </div>
      {/* Mobile menu can be added here if needed */}
    </nav>
  );
};

export default Navbar;