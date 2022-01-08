import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';


type TFormData = {name: string, phone: string, email: string, subject: string, description: string}

const Contacts: React.FC   = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const { register, handleSubmit, errors } = useForm();

  const serviceID = 'service_dwcig0p';
  const templateID = 'template_cnrxm1m';
  const userID = 'user_71i8cGIfIVtKX7hse4aEV';

  const onSubmit = (data:TFormData , formElement: any) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );

    formElement.target.reset();
  };

  const sendEmail = (serviceID: string, templateID: string, variables: Object | undefined, userID: string | undefined) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage(
          "Formulário enviado com sucesso! Estarei entrando em contato em breve, obrigado!"
        );
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
  };

  return (
    <div id='contacts' className='contacts'>
      <div className='text-center'>
        <h1>
          Contato <span className='dot'>.</span>
        </h1>
        <p>
          Preencha o formulário e descreva as necessidades do seu projeto e
          entrarei em contato com você o mais breve possível.
        </p>
        <span className='success-message'>{successMessage}</span>
      </div>
      <div className='container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='row'>
            <div className='col-md-6 col-xs-12'>
              {/* NAME INPUT */}
              <div className='text-center'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Name'
                  name='name'
                  ref={register({
                    required: 'Por favor, insira seu nome',
                    maxLength: {
                      value: 20,
                      message: 'Insira um nome com menos de 20 caracteres',
                    },
                  })}
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.name && errors.name.message}
              </span>
              {/* PHONE INPUT */}
              <div className='text-center'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Telefone'
                  name='phone'
                  ref={register({
                    required: 'Por favor, adicione seu número de telefone',
                  })}
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.phone && errors.phone.message}
              </span>
              {/* EMAIL INPUT */}
              <div className='text-center'>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Email'
                  name='email'
                  ref={register({
                    required: 'Por favor, forneça seu e-mail',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'invalid Email',
                    },
                  })}
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.email && errors.email.message}
              </span>
              {/* SUBJECT INPUT */}
              <div className='text-center'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Assunto'
                  name='subject'
                  ref={register({
                    required: 'OOPS, você se esqueceu de adicionar o assunto.',
                  })}
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.subject && errors.subject.message}
              </span>
            </div>
            <div className='col-md-6 col-xs-12'>
              {/* DESCRIPTION */}
              <div className='text-center'>
                <textarea              
                  className='form-control'
                  placeholder='Descreva brevemente seu projeto ...'
                  name='description'
                  ref={register({
                    required:
                      'Descreva resumidamente as necessidades do seu projeto ...',
                  })}
                ></textarea>
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.description && errors.description.message}
              </span>
              <button className='btn-main-offer contact-btn' type='submit'>
                contate-me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
