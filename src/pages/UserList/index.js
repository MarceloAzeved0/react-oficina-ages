import React, { useState, useEffect} from 'react';
import { getAllUsers, deleteUser } from '../../services/users';

import FormField from '../../components/FormField';
import Select from '../../components/Select';

import EditIcon from '../../assets/icons/EditButton.svg';
import RemoveIcon from '../../assets/icons/DeleteButton.svg'

function UserList({ history }) {
  const [users, setUsers] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchStatus, setSearchStatus] = useState('');
  const [searchCourse, setSearchCourse] = useState('');
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    const data = await getAllUsers();
    console.log('data', data);
    if(data.success){
      setUsers(data.users);
    }

    setLoading(false);
  } 

  useEffect(() => {
    getUsers();
  }, [])

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
    </div>
  );
}

export default UserList;
