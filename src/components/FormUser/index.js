import React, { useState, useEffect } from 'react';

import FormField from '../../components/FormField';
import Select from '../../components/Select';
import axios from 'axios';

function FormUser({
  goBack,
  initialValues,
  onSubmit,
  buttonSubmitText,
  buttonCancelText,
}) {
  const [avatar, setAvatar] = useState('');

  const [formValues, setFormValues] = useState([
    { name: 'name', value: initialValues.name || '' },
    { name: 'register', value: initialValues.register || '' },
    { name: 'day', value: initialValues.day || '' },
    { name: 'course', value: initialValues.course || '' },
    { name: 'month', value: initialValues.month || '' },
    { name: 'year', value: initialValues.year || '' },
    { name: 'cep', value: initialValues.cep || '' },
    { name: 'address', value: initialValues.address || '' },
    { name: 'number', value: initialValues.number || '' },
    { name: 'address_detail', value: initialValues.address_detail || '' },
    { name: 'district', value: initialValues.district || '' },
    { name: 'status', value: initialValues.status },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.find((value) => value.name === 'name').value,
      register: formValues.find((value) => value.name === 'register').value,
      course: formValues.find((value) => value.name === 'course').value,
      birthDate: `${formValues.find((value) => value.name === 'year').value}-${
        formValues.find((value) => value.name === 'month').value
      }-${formValues.find((value) => value.name === 'day').value}`,
      cep: formValues.find((value) => value.name === 'cep').value,
      address: formValues.find((value) => value.name === 'address').value,
      number: formValues.find((value) => value.name === 'number').value,
      address_detail: formValues.find(
        (value) => value.name === 'address_detail'
      ).value,
      district: formValues.find((value) => value.name === 'district').value,
      status: formValues.find((value) => value.name === 'status').value,
      image: avatar,
    };
    onSubmit(newUser);
  };

  const onChange = (name, value) => {
    let filterFormValues = formValues.filter(
      (formValue) => formValue.name !== name
    );

    filterFormValues.push({ name, value });
    setFormValues(filterFormValues);
  };

  const onChangeByCep = async (value) => {
    const { data } = await axios.get(`https://viacep.com.br/ws/${value}/json/`);
    if (data) {
      let filterFormValues = formValues.filter(
        (formValue) =>
          formValue.name !== 'district' &&
          formValue.name !== 'address_detail' &&
          formValue.name !== 'number' &&
          formValue.name !== 'address' &&
          formValue.name !== 'cep'
      );

      filterFormValues.push({ name: 'district', value: data.bairro });
      filterFormValues.push({
        name: 'address_detail',
        value: data.complemento,
      });
      filterFormValues.push({ name: 'number', value: '' });
      filterFormValues.push({ name: 'address', value: data.logradouro });
      filterFormValues.push({ name: 'cep', value: data.cep });

      setFormValues(filterFormValues);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, formValues)}>
      <div className="form-body">
        <div className="mr-16">
          <FormField
            label="Nome"
            placeholder="Nome"
            name="name"
            width="100%"
            value={
              formValues.find((formValue) => formValue.name === 'name').value
            }
            type="text"
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
          <div className="form-row">
            <FormField
              placeholder="Matrícula"
              label="Matricula"
              name="register"
              type="number"
              width="49%"
              onChange={(e) => onChange(e.target.name, e.target.value)}
              value={
                formValues.find((formValue) => formValue.name === 'register')
                  .value
              }
            />
            <Select
              name="course"
              value={
                formValues.find((formValue) => formValue.name === 'course')
                  .value
              }
              label="Curso"
              onChange={(e) => onChange(e.target.name, e.target.value)}
              width="49%"
              options={[
                { label: 'React', value: 'React' },
                { label: 'Node', value: 'Node' },
              ]}
            />
          </div>
          <label>Data de nascimento</label>
          <div className="form-row">
            <FormField
              placeholder="Dia"
              name="day"
              min="1"
              max="31"
              type="number"
              width={'30%'}
              onChange={(e) => onChange(e.target.name, e.target.value)}
              value={
                formValues.find((formValue) => formValue.name === 'day').value
              }
            />
            <FormField
              placeholder="Mês"
              min="1"
              max="12"
              onChange={(e) => onChange(e.target.name, e.target.value)}
              value={
                formValues.find((formValue) => formValue.name === 'month').value
              }
              width={'30%'}
              name="month"
              type="number"
            />
            <FormField
              width={'30%'}
              placeholder="Ano"
              min={1900}
              name="year"
              type="number"
              onChange={(e) => onChange(e.target.name, e.target.value)}
              value={
                formValues.find((formValue) => formValue.name === 'year').value
              }
            />
          </div>
          <label>Endereço</label>
          <FormField
            placeholder="CEP"
            onChange={(e) => onChange(e.target.name, e.target.value)}
            onBlur={(e) => onChangeByCep(e.target.value)}
            value={
              formValues.find((formValue) => formValue.name === 'cep').value
            }
            name="cep"
            type="text"
          />
          <FormField
            placeholder="Logradouro"
            onChange={(e) => onChange(e.target.name, e.target.value)}
            value={
              formValues.find((formValue) => formValue.name === 'address').value
            }
            name="address"
            type="text"
          />
          <div className="form-row">
            <FormField
              width="50%"
              placeholder="Número"
              onChange={(e) => onChange(e.target.name, e.target.value)}
              value={
                formValues.find((formValue) => formValue.name === 'number')
                  .value
              }
              name="number"
              type="number"
            />
            <FormField
              width="50%"
              placeholder="Complemento"
              onChange={(e) => onChange(e.target.name, e.target.value)}
              value={
                formValues.find(
                  (formValue) => formValue.name === 'address_detail'
                ).value
              }
              name="address_detail"
              type="text"
            />
          </div>
          <FormField
            placeholder="Bairro"
            onChange={(e) => onChange(e.target.name, e.target.value)}
            value={
              formValues.find((formValue) => formValue.name === 'district')
                .value
            }
            name="district"
            type="text"
          />
          <label>Status</label>
          <div>
            <input
              type="radio"
              name="status"
              onChange={(e) => onChange(e.target.name, true)}
              checked={
                formValues.find((formValue) => formValue.name === 'status')
                  .value === true
              }
              value={true}
            />
            <label className="mr-16" for="active">
              Ativo
            </label>
            <input
              type="radio"
              name="status"
              onChange={(e) => onChange(e.target.name, false)}
              checked={
                formValues.find((formValue) => formValue.name === 'status')
                  .value === false
              }
              value={false}
            />
            <label for="inactive">Inativo</label>
          </div>
        </div>
        {/* <AvatarUpload user={initialValues} /> */}
      </div>
      <div className="form-footer">
        <button className="cancel-button mr-16" onClick={goBack}>
          {buttonCancelText}
        </button>
        <button className="primary-button">{buttonSubmitText}</button>
      </div>
    </form>
  );
}

export default FormUser;
