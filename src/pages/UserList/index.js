import React, { useState, useEffect} from 'react';
import { getAllUsers, deleteUser } from '../../services/users';

import FormField from '../../components/FormField';
import Select from '../../components/Select';

import { toast } from 'react-toastify';

import EditIcon from '../../assets/icons/EditButton.svg';
import RemoveIcon from '../../assets/icons/DeleteButton.svg'

import Loader from '../../components/Loader';
import teste from '../../assets/teste.png';

function UserList({ history }) {
  const [users, setUsers] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchStatus, setSearchStatus] = useState('');
  const [searchCourse, setSearchCourse] = useState('');
  const [loading, setLoading] = useState(false);

  const deleteUserRow = async (id) => {
    const data = await deleteUser(id);
    if(data.success){
      toast(`Usuário ${id} excluído com sucesso!`);
      getUsers();
    }
  }

  const getUsers = async (query) => {
    setLoading(true);
    const data = await getAllUsers(query);
    console.log('data', data);
    if(data.success){
      setUsers(data.users);
    }

    setLoading(false);
  } 

  const getRows = (user) => (
    <tr key={user.id}>
      <td>
        <img className="profile-image" src={user.image || teste} alt="Imagem do usuário" />
      </td>
      <td>{user.name}</td>
      <td>{user.register}</td>
      <td>{user.course}</td>
      <td>
        { user.status ? (
          <span className="badge active-badge">Ativo</span>
        ) : (
          <span className="badge inactive-badge">Inativo</span>
        )}
      </td>
      <td>
        <td>
          <img onClick={() => history.push(`user/${user.id}`)} src={EditIcon} alt="Editar Usuário"/>
        </td>
        <td>
          <img onClick={() => deleteUserRow(user.id)} src={RemoveIcon} alt="Remover Usuário"/>
        </td>
      </td>
    </tr> 
  )

  useEffect(() => {
    const searching = setTimeout(() =>{
      let filterValues = [];
      if(searchName){
        filterValues.push(`name_like=${searchName}`)
      }

      if(searchStatus){
        filterValues.push(`status_like=${searchStatus}`)
      }

      if(searchCourse){
        filterValues.push(`course_like=${searchCourse}`)
      }
      
      let query = '';

      filterValues.forEach((filterValue, i) => {
        if(i===0){
          query += `?${filterValue}`;
        }else{
          query += `&${filterValue}`;
        }
      });

      getUsers(query);
    }, 500);

    return () => {
      clearTimeout(searching);
    }
    
  }, [searchName, searchStatus, searchCourse])

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h2>Filtros</h2>
        </div>
        <div className="form-row">
          <FormField
            type="text"
            label="Pesquisar"
            width="30%"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            name="search"
            placeholder="Pesquisar"
          />

          <Select
            name="course"
            placeholder="Curso"
            value={searchCourse}
            label="Curso"
            onChange={(e) => setSearchCourse(e.target.value)}
            options={[
              { label: "React", value: "React" },
              { label: "Node", value: "Node" },
            ]}
          />

          <Select
            name="status"
            placeholder="Status"
            value={searchStatus}
            label="Status"
            onChange={(e) => setSearchStatus(e.target.value)}
            options={[
              { label: "Ativo", value: true },
              { label: "Inativo", value: false },
            ]}
          />
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2>Alunos Cadastrados</h2>
          <button type="button" className="primary-button" onClick={() => history.push('register/user')}>
            Cadastrar
          </button>
        </div>
        {loading ? (
          <Loader />
        ):(
            <table>
              <thead>
                <th></th>
                <th>Nome</th>
                <th>Matrícula</th>
                <th>Curso</th>
                <th>Status</th>
                <th>Ações</th>
              </thead>
              <tbody>{ users.map((user) => getRows(user))}</tbody>
            </table>
        )}
      </div>
    </div>
  );
}

export default UserList;
