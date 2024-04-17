import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { ErrorSpan, Field, Form, Input, Label } from '@/Components/form';
import { UserReq } from '@/Types/user';

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type FormSchemaType = z.infer<typeof FormSchema>;
type AuthFormProps = {
  submitButtonText: 'Login' | 'Register';
  handleFormSubmit: (value: UserReq) => void;
};

const AuthForm = ({ submitButtonText, handleFormSubmit }: AuthFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (values: UserReq) => {
    handleFormSubmit(values);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Field>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" showErrorStyles={!!errors.email} {...register('email')} />
        {errors.email && <ErrorSpan>{errors.email.message}</ErrorSpan>}
      </Field>
      <Field>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" showErrorStyles={!!errors.password} {...register('password')} />
        {errors.password && <ErrorSpan>{errors.password.message}</ErrorSpan>}
        {submitButtonText === 'Login' && (
          <button className="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            Forgot Password?
          </button>
        )}
      </Field>
      <div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
        >
          {submitButtonText}
        </button>
      </div>
    </Form>
  );
};

export default AuthForm;
