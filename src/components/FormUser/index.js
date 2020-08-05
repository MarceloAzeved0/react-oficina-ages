import React, { useState, useEffect } from 'react';

import FormField from '../../components/FormField';
import Select from '../../components/Select';
import axios from "axios";

function FormUser({ 
  goBack,
  initialValues,
  onSubmit,
  buttonSubmitText,
  buttonCancelText,
 }) {
  const [formValues, setFormValues] = useState([
    { name: "name", value: initialValues.name || "" },
    { name: "register", value: initialValues.register || "" },
    { name: "day", value: initialValues.day || "" },
    { name: "course", value: initialValues.course || "" },
    { name: "month", value: initialValues.month || "" },
    { name: "year", value: initialValues.year || "" },
    { name: "cep", value: initialValues.cep || "" },
    { name: "address", value: initialValues.address || "" },
    { name: "number", value: initialValues.number || "" },
    { name: "address_detail", value: initialValues.address_detail || "" },
    { name: "district", value: initialValues.district || "" },
    { name: "status", value: initialValues.status },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.find((value) => value.name === "name").value,
      register: formValues.find((value) => value.name === "register").value,
      course: formValues.find((value) => value.name === "course").value,
      birthDate: `${formValues.find((value) => value.name === "year").value}-${
        formValues.find((value) => value.name === "month").value
      }-${formValues.find((value) => value.name === "day").value}`,
      cep: formValues.find((value) => value.name === "cep").value,
      address: formValues.find((value) => value.name === "address").value,
      number: formValues.find((value) => value.name === "number").value,
      address_detail: formValues.find(
        (value) => value.name === "address_detail"
      ).value,
      district: formValues.find((value) => value.name === "district").value,
      status: formValues.find((value) => value.name === "status").value,
      image: "/assets/teste.png",
    };
    onSubmit(newUser);
  };

  return <div />;
}

export default FormUser;
