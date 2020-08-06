import api from '../services';

export const getAllUsers = async (query) => {
  try {
    const { data } = await api.get(`/user${query || ''}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (userId) => {
  try {
    const { data } = await api.get(`/user/${userId}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id, user) => {
  try {
    const { data } = await api.put(`/user/${id}`, { user });
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (userId) => {
  try {
    const { data } = await api.delete(`/user/${userId}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (user) => {
  try {
    const { data } = await api.post(`/user`, { user });
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateAvatar = async (userId, formData) => {
  try {
    const { data } = await api.patch(`/user/${userId}/image`, formData);
    return data;
  } catch (error) {
    throw error;
  }
};
