import React from 'react';
import { createUser } from '../../services/users';
import { toast } from 'react-toastify';
import FormUser from '../../components/FormUser';

function UserAdd({ history }) {
  const onSubmit = async (values) => {
    const data = await createUser(values);
    if(data.success){
      toast('Registrado com sucesso!');
      history.push('/');
    }
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h2 className="title">Cadastro de Aluno</h2>
        </div>
      
        <FormUser 
          initialValues={{}}
          goBack={() => history.push('/')}
          onSubmit={onSubmit}
          buttonCancelText="Cancelar"
          buttonSubmitText="Cadastrar"
        />
      </div>
    </div>
  );
}

export default UserAdd;
