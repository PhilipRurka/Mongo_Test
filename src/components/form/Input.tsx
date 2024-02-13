import clsx from 'clsx';
import { HTMLProps, forwardRef } from 'react';

type InputProps = HTMLProps<HTMLInputElement> & {
  showErrorStyles: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(({ showErrorStyles, ...rest }, ref) => {
  console.log('');

  return <input className={clsx('border', showErrorStyles ? 'border-red-500' : 'border-black')} {...rest} ref={ref} />;
});

Input.displayName = 'Input';

export default Input;
