import api from "../api";

export const getAllUsers = async () => {
	const res = await api.get(`/researchers`);
	return res.data;
};

export const PostResearcher = async (body: any) => {
  const res = await api.post(`/researchers`, body);
  return res.data;
};
