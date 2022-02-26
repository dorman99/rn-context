import axios from "axios";
const BASE_URL = "http://localhost:3000";
const request = axios.create({ baseURL: BASE_URL });

export const finds = async () => {
  const response = await request.get("/blogposts");
  const data = response.data;
  return data;
};

export const add = async (blog) => {
  const payload = {
    title: blog.title,
    content: blog.content,
  };
  const response = await request.post("/blogposts", payload);
  return response.data;
};

export const find = async (id) => {
  try {
    const response = await request.get(`/blogposts/${id}`);
    return await response.data;
  } catch (err) {
    console.log({err})
    return null;
  }
};

export const edit = async (blog) => {
  const id = blog.id;
  const payload = {
    title: blog.title,
    content: blog.content,
  };
  const response = await request.put(`/blogposts/${id}`, payload);
  return await response.data;
};

export const remove = async (id) => {
  const response = await request.delete(`/blogposts/${id}`);
  return response.data;
};
