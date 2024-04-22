import { Link } from '@inertiajs/react';
import React from 'react';
export default function NavLink({ active, href, children, }) {
    const classes = active
        ? 'inline-flex items-center px-1 pt-1 border-b-2 border-blue-chill-400 dark:border-blue-chill-600 text-sm font-medium leading-5 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-chill-700 transition duration-150 ease-in-out'
        : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 dark:text-gray-400 hover:text-primary/80 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-primary/80 focus:outline-none focus:text-primary/80 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-primary/80 transition duration-150 ease-in-out';
    return (<Link href={href} className={classes}>
      {children}
    </Link>);
}
