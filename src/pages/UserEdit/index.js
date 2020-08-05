import React, { useState, useEffect} from 'react';
import FormUser from '../../components/FormUser';
import { getUserById, updateUser } from '../../services/users';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';

function UserEdit({match, history}) {
  const [ userValues, setUserValues] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const data = await getUserById(match.params.id);

      if(data.success){
        const { user } = data;
        if(user.birthDate){
          const dates = user.birthDate.split('-');
          user.year = dates[0];
          user.month = dates[1];
          user.day = dates[2];
        }
        setUserValues(user);
      }else{
        toast('Erro ao encontrar o usuário!');
      }
      setLoading(false);
    } 
    getUser();
  }, [match.params.id])

  const onSubmit = async(values) => {
    const data = await updateUser(match.params.id, values);

    if(data.success){
      toast('Registro alterado com sucesso!');
      history.push('/');
    }
  }
  return loading ? (
    <Loader />
    ) : (
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h2 className="title">Editar Aluno</h2>
          </div>
          <FormUser
            initialValues={userValues}
            goBack={() => history.push('/')}
            onSubmit={onSubmit}
            buttonCancelText="Cancelar"
            buttonSubmitText="Alterar"
          />
        </div>
      </div>
    );
}

export default UserEdit;
