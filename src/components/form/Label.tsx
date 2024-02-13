import { HTMLProps, ReactNode } from 'react';

type LabelProps = HTMLProps<HTMLLabelElement> & {
  children: ReactNode;
};

const Label = ({ children, ...rest }: LabelProps) => (
  <label className="" {...rest}>
    {children}
  </label>
);

export default Label;
