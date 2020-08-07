import React, { useState } from 'react';
import { updateAvatar } from '../../services/users';
import { toast } from 'react-toastify';

import './styles.css';

import teste from '../../assets/teste.png';

function AvatarUpload({ setAvatar, user }) {
  const [image, setImage] = useState(user.image || teste);

  async function handleAvatarChange(event) {
    if (!event.target.files) return;

    const formData = new FormData();

    formData.append('file', event.target.files[0]);

    const data = await updateAvatar(user.id, formData);

    if (data.success) {
      toast('Avatar atualizado com sucesso!');

      setAvatar(data.user.image);
      setImage(data.user.image);
    } else {
      toast('Ops...');
    }
  }

  return (
    <label className="upload" htmlFor="avatar">
      <img src={image} alt="" />
      <input type="file" id="avatar" onChange={handleAvatarChange} />
    </label>
  );
}

export default AvatarUpload;
