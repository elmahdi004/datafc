import classNames from 'classnames';
import React from 'react';
export default function PrimaryButton({ children, ...props }) {

    return (<button {...props} className={classNames('inline-flex items-center px-4 py-2 bg-primary dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-primary uppercase tracking-widest hover:bg-primary/80 dark:hover:bg-white focus:bg-primary/80 dark:focus:bg-white active:bg-primary/95 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-chill-500 focus:ring-offset-2 dark:focus:ring-offset-primary transition ease-in-out duration-150', props.className)}>
      {children}
    </button>);
      /*
    return (<button {...props} className={classNames("relative rounded px-5 py-2.5 overflow-hidden group bg-primary  hover:bg-gradient-to-r hover:from-primary hover:to-primary/75 text-white hover:ring-2 hover:ring-offset-2 hover:ring-primary transition-all ease-out duration-300", props.className)}>
    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
    <span className="relative">{children}</span>
</button>);
  */
}
