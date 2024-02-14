import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { ErrorSpan, Field, Form, Input, Label, Select } from '@/Components/form';
import { TodoFrontend, TodoReq } from '@/Types/todos';

const FormSchema = z.object({
  title: z.string().min(3).max(20),
  message: z.string().min(5).max(50),
  priority: z.enum(['low', 'medium', 'high']),
});

type FormSchemaType = z.infer<typeof FormSchema>;
type TodoFormProps = {
  defaultValues?: TodoFrontend;
  handleFormSubmit: (values: TodoReq) => void;
};

const priorityOptions = FormSchema.shape.priority.options;

const TodoForm = ({ defaultValues, handleFormSubmit }: TodoFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      priority: undefined,
    },
  });

  const onSubmit = (values: FormSchemaType) => {
    handleFormSubmit(values);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Field>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            showErrorStyles={!!errors.title}
            defaultValue={defaultValues?.title ?? ''}
            {...register('title')}
          />
          {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
        </Field>
        <Field>
          <Label htmlFor="message">Message</Label>
          <Input
            type="text"
            id="message"
            showErrorStyles={!!errors.message}
            defaultValue={defaultValues?.message ?? ''}
            {...register('message')}
          />
          {errors.message && <ErrorSpan>{errors.message.message}</ErrorSpan>}
        </Field>
        <Field>
          <Label htmlFor="priority">Priority</Label>
          <Select
            id="priority"
            options={priorityOptions}
            defaultValue={defaultValues?.priority ?? ''}
            {...register('priority')}
          />
          {errors.priority && <ErrorSpan>{errors.priority.message}</ErrorSpan>}
        </Field>
        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </div>
  );
};

export default TodoForm;
