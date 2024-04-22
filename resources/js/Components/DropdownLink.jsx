import { Link } from '@inertiajs/react';
import React from 'react';
export default function DropdownLink({ as, href, children, }) {
    return (<div>
      {(() => {
            switch (as) {
                case 'button':
                    return (<button type="submit" className="block w-full px-4 py-2 text-left text-sm leading-5 text-primary/80 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-primary focus:outline-none focus:bg-gray-100 dark:focus:bg-primary transition duration-150 ease-in-out">
                {children}
              </button>);
                case 'a':
                    return (<a href={href} className="block px-4 py-2 text-sm leading-5 text-primary/80 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-primary focus:outline-none focus:bg-gray-100 dark:focus:bg-primary transition duration-150 ease-in-out">
                {children}
              </a>);
                default:
                    return (<Link href={href || ''} className="block px-4 py-2 text-sm leading-5 text-primary/80 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-primary focus:outline-none focus:bg-gray-100 dark:focus:bg-primary transition duration-150 ease-in-out">
                {children}
              </Link>);
            }
        })()}
    </div>);
}
