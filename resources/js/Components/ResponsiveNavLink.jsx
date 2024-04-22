import { Link } from '@inertiajs/react';
import classNames from 'classnames';
import React from 'react';
export default function ResponsiveNavLink({ active, href, children, ...props }) {
    const classes = active
        ? 'block w-full pl-3 pr-4 py-2 border-l-4 border-blue-chill-400 dark:border-blue-chill-600 text-left text-base font-medium text-blue-chill-700 dark:text-blue-chill-300 bg-blue-chill-50 dark:bg-blue-chill-900/50 focus:outline-none focus:text-blue-chill-800 dark:focus:text-blue-chill-200 focus:bg-blue-chill-100 dark:focus:bg-blue-chill-900 focus:border-blue-chill-700 dark:focus:border-blue-chill-300 transition duration-150 ease-in-out'
        : 'block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-primary/80 hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:text-primary dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-primary/80 focus:border-gray-300 dark:focus:border-gray-600 transition duration-150 ease-in-out';
    return (<div>
      {'as' in props && props.as === 'button' ? (<button className={classNames('w-full text-left', classes)}>
          {children}
        </button>) : (<Link href={href || ''} className={classes}>
          {children}
        </Link>)}
    </div>);
}
