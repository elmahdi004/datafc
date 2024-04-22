import classNames from 'classnames';
import React from 'react';
export default function Checkbox(props) {
    return (<input type="checkbox" {...props} className={classNames('rounded dark:bg-gray-900 border-gray-300 dark:border-primary/80 text-primary shadow-sm focus:ring-primary dark:focus:ring-blue-chill-600 dark:focus:ring-offset-primary', props.className)}/>);
}
