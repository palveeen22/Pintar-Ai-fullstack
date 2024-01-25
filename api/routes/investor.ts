import api from "../api";

export const getAllUsers = async () => {
  const res = await api.get(`/investors`);
  return res.data;
};

export const PostResearcher = async (body: any) => {
  const res = await api.post(`/investors`, body);
  return res.data;
};

// export const getUserById = async () => {
//   const res = await api.get(`/investors/${id}`);
//   return res.data;
// };