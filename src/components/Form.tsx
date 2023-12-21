import { useForm } from '../hooks/useForm';

const Form = () => {
  const { formValues, handleInputChange } = useForm({});

  console.log(formValues);

  return (
    <form action='#'>
      <div>
        <label htmlFor='firstName'>Nombre</label>
        <input
          onChange={handleInputChange}
          type='text'
          id='firstName'
          name='first_name'
        />
      </div>
      <div>
        <label htmlFor='lastName'>Apellido</label>
        <input
          onChange={handleInputChange}
          type='text'
          id='lastName'
          name='last_name'
        />
      </div>
      <div>
        <label htmlFor='age'>Edad</label>
        <input onChange={handleInputChange} type='text' name='age' id='age' />
      </div>
      <div>
        <label htmlFor='password'>Contraseña</label>
        <input
          onChange={handleInputChange}
          type='text'
          name='password'
          id='password'
        />
      </div>
    </form>
  );
};

export default Form;
