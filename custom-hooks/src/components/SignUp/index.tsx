import React, { useState } from 'react';
import Input from '../../ui/Input';
import './index.scss'

const SignUp = () => {
  const [inputs, setInputs] = useState({
    name: '',
    nickName: '',
    email: '',
    gender: '',
    password: '',
    repeatedPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    nickName: '',
    email: '',
    gender: '',
    password: '',
    repeatedPassword: '',
  });

  const [requiredFields, setRequiredFields] = useState({
    name: true,
    nickName: true,
    email: true,
    gender: true,
    password: true,
    repeatedPassword: true,
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors = {
      name: '',
      nickName: '',
      email: '',
      gender: '',
      password: '',
      repeatedPassword: '',
    }
    if (!inputs.name && requiredFields.name) {
      newErrors.name = 'Это поле является обязательным';
    } else if (inputs.name.length < 2 || inputs.name.length > 30) {
      newErrors.name = 'Введите имя от 2 до 30 символов';
    } else {
      newErrors.name = '';
    }

    if (!inputs.nickName && requiredFields.nickName) {
      newErrors.nickName = 'Это поле является обязательным';
    } else if (inputs.nickName.length < 2 || inputs.nickName.length > 30) {
      newErrors.nickName = 'Введите имя от 2 до 30 символов';
    } else {
      newErrors.nickName = '';
    }
    

    if (!inputs.email && requiredFields.email) {
      newErrors.email = 'Email является обязательным полем';
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
      newErrors.email = 'Email введен некорректно';
    } else {
      newErrors.email = '';
    }
    
    if (!inputs.gender && requiredFields.gender) {
      newErrors.gender = 'Необходимо выбрать пол';
    } else {
      newErrors.gender = '';
    }

    if (!inputs.password && requiredFields.password) {
      newErrors.password = 'Это поле является обязательным';
    } else if (inputs.password.length < 6) {
      newErrors.password = 'Пароль должен содержать не менее 6 символов';
    } else {
      newErrors.password = '';
    }    
    
    if (!inputs.repeatedPassword && requiredFields.repeatedPassword) {
      newErrors.repeatedPassword = 'Это поле является обязательным';
    } else if (inputs.repeatedPassword !== inputs.password) {
      newErrors.repeatedPassword = 'Пароли не совпадают';
    } else {
      newErrors.repeatedPassword = '';
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

  return (
    <form onSubmit={handleSubmit} className='form_submit'>
        <Input 
            type='text'
            name="name"
            labelName='Имя'
            value={inputs.name}
            onChange={handleChange}
            placeholder="Введите имя"
            error={errors.name}
            errorText={errors.name}
            isSubmitted={isSubmitted}
            requiredFields={requiredFields.name}
        />
        <Input 
            type='text'
            name="nickName"
            labelName='Никнейм'
            value={inputs.nickName}
            onChange={handleChange}
            placeholder="Введите Ваш Никнейм"
            error={errors.nickName}
            errorText={errors.nickName}
            isSubmitted={isSubmitted}
            requiredFields={requiredFields.nickName}
        />
        <Input 
            type="email"
            name='email'
            labelName='Email'
            value={inputs.email}
            onChange={handleChange}
            placeholder="Введите Email"
            error={errors.email}
            errorText={errors.email}
            isSubmitted={isSubmitted}
            requiredFields={requiredFields.email}
        />
        <div className={`radio_wrapper ${errors.gender ? 'error' : ''} 
          ${isSubmitted && !errors.gender ? 'valid' : ''}`}>
          <div className='radio_flex_wrapper'>
            <Input 
                type='radio'
                name='gender'
                value='Male'
                checked={inputs.gender === 'Male'}
                onChange={handleChange}
                labelName='Male'
                error={errors.gender}
                isSubmitted={isSubmitted}
                requiredFields={requiredFields.gender}
            />
            <Input 
                type='radio'
                name='gender'
                value='Female'
                checked={inputs.gender === 'Female'}
                onChange={handleChange}
                labelName='Female'
                error={errors.gender}
                isSubmitted={isSubmitted}
                requiredFields={requiredFields.gender}
            />
          </div>
          {errors.gender && <span className={errors.gender && 'errortxt'}>{errors.gender}</span>}
        </div>
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
        <Input 
            type='password'
            name='repeatedPassword'
            labelName='Повторите пароль'
            value={inputs.repeatedPassword}
            onChange={handleChange}
            placeholder='Введите пароль еще раз'
            error={errors.repeatedPassword}
            errorText={errors.repeatedPassword}
            isSubmitted={isSubmitted}
            requiredFields={requiredFields.repeatedPassword}
        />
      <button type="submit">Войти</button>
    </form>
  );
};

export default SignUp;