import React, { useState, useEffect} from 'react';
import { getAllUsers, deleteUser } from '../../services/users';

import FormField from '../../components/FormField';
import Select from '../../components/Select';

import EditIcon from '../../assets/icons/EditButton.svg';
import RemoveIcon from '../../assets/icons/DeleteButton.svg'

import './styles.css';

function UserList({ history }) {
  return (
    <h1>teste user edit</h1>
  );
}

export default UserList;