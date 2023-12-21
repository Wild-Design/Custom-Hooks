import { useState, ChangeEvent } from 'react';

export const useForm = <T extends Object>(initialState: T) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  return {
    formValues,
    handleInputChange,
  };
};
