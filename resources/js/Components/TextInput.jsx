import classNames from 'classnames';
import React, { forwardRef } from 'react';
const TextInput = forwardRef((props, ref) => (
<input {...props} ref={ref} className={classNames('border-gray-300 dark:border-primary/80 dark:text-gray-300 focus:border-primary  focus:ring-primary rounded-md shadow-sm', props.className)}/>
));
export default TextInput;
