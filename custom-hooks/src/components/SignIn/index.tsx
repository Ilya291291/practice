import React, { useState } from 'react';
import { Input } from '../Input';
import './index.scss';

const SignIn = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [requiredFields, setRequiredFields] = useState({
    email: true,
    password: true,
  })

  const validateForm = () => {
    const newErrors = {
      email: '',
      password: '',
    }
    if (!inputs.email && requiredFields.email) {
      newErrors.email = 'Email является обязательным полем';
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
      newErrors.email = 'Email введен некорректно';
    } else {
      newErrors.email = '';
    }

    if (!inputs.password && requiredFields.password) {
      newErrors.password = 'Это поле является обязательным';
    } else if (inputs.password.length < 6) {
      newErrors.password = 'Пароль должен содержать не менее 6 символов';
    } else {
      newErrors.password = '';
    } 
    setErrors(newErrors);
  }

  const handleChange = (event) => {
    setInputs({ 
      ...inputs, 
      [event.target.name]: event.target.value
  })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    validateForm()
  }

  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <form onSubmit={handleSubmit} className='form_submit'>
        <Input 
            type='email'
            name="email"
            labelName='Email'
            value={inputs.email}
            onChange={handleChange}
            placeholder="Введите Email"
            error={errors.email}
            errorText={errors.email}
            isSubmitted={isSubmitted}
            requiredFields={requiredFields.email}
        />
        <Input 
            type='password'
            name='password'
            labelName='Пароль'
            value={inputs.password}
            onChange={handleChange}
            placeholder='Введите пароль'
            error={errors.password}
            errorText={errors.password}
            isSubmitted={isSubmitted}
            requiredFields={requiredFields.password}
        />
      <button type="submit">Войти</button>
    </form>
  );
};

export default SignIn;