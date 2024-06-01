'use client';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, TForm } from '@/utils/zod';

type FieldName = 'first_name' | 'last_name' | 'email' | 'device_number';

interface InputField {
  name: FieldName;
  type: string;
  placeholder: string;
}

const Form = () => {
  const { control, handleSubmit } = useForm<TForm>({
    resolver: zodResolver(formSchema),
  });

  const inputFields: InputField[] = [
    {
      name: 'first_name',
      type: 'text',
      placeholder: 'First Name',
    },
    {
      name: 'last_name',
      type: 'text',
      placeholder: 'Last Name',
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email',
    },
    {
      name: 'device_number',
      type: 'number',
      placeholder: 'Number of devices',
    },
  ];

  const onOrder = () => {
    alert('You successfully pre-ordered the VR PRO!');
  };

  return (
    <div id="form" className="flex flex-col items-center justify-center">
      <div className="w-full p-6 text-gray-500 md:p-12">
        <h2 className="mb-6 text-center text-2xl font-semibold">
          Experience the Future with VR Pro
        </h2>
        <p className="mb-6 text-center text-lg font-medium md:text-left">
          The VR Pro is an advanced virtual reality system designed for
          unparalleled immersive experiences. Ideal for gaming, entertainment,
          education, and professional training, VR Pro offers high-resolution
          visuals, precise tracking, ergonomic design, and a vast content
          library.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onOrder)}
        className="flex w-full flex-col items-center gap-4 lg:w-1/2"
      >
        {inputFields.map((input) => (
          <Controller
            key={input.name}
            control={control}
            render={({ field, fieldState }) => (
              <div className="w-full">
                <input
                  {...field}
                  type={input.type}
                  className="w-full rounded-xl border border-gray-300 p-3 outline-none transition duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                  placeholder={input.placeholder}
                />
                {fieldState.error && (
                  <div className="ml-1 mt-1 text-sm text-red-600">
                    {fieldState.error.message}
                  </div>
                )}
              </div>
            )}
            name={input.name}
          />
        ))}

        <button
          type="submit"
          className="mt-6 w-full rounded-xl bg-gray-400 px-8 py-3 font-medium text-white transition duration-200 hover:bg-gray-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
