import classNames from 'classnames';
import React from 'react';
export default function SecondaryButton({ children, ...props }) {
    return (<button {...props} className={classNames('inline-flex items-center px-4 py-2 bg-white dark:bg-primary border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-xs text-primary/80 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-blue-chill-500 focus:ring-offset-2 dark:focus:ring-offset-primary disabled:opacity-25 transition ease-in-out duration-150', props.className)}>
      {children}
    </button>);
}
