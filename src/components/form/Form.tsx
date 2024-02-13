import { HTMLProps, ReactNode } from 'react';

type FormProps = HTMLProps<HTMLFormElement> & {
  children: ReactNode;
};

const Form = ({ children, ...rest }: FormProps) => (
  <form className="" {...rest}>
    {children}
  </form>
);

export default Form;
