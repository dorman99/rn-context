import createDataContext from "./createDataContext";
import * as BlogPostAPI from "../api/blogpostAPI";

const reducer = (state, action) => {
  switch (action.type) {
    case "remove":
      return state.filter((blog) => blog.id !== action.payload.id);
    case "finds":
      return action.payload;
    default:
      return state;
  }
};

const findBlogPosts = (dispatch) => {
  return async () => {
    const blogs = await BlogPostAPI.finds();
    dispatch({ type: "finds", payload: blogs });
  };
};

const addBlogPost = () => {
  return async ({ title, content, callback }) => {
    if (!title || !content) {
      console.log("Something Went Wrong");
      return;
    }
    await BlogPostAPI.add({ title, content });
    callback();
  };
};

const removeBlogPost = (dispatch) => {
  return async (id) => {
    await BlogPostAPI.remove(id);
    dispatch({ type: "remove", payload: { id } });
  };
};

const editBlogPost = () => {
  return async ({ id, title, content, callback }) => {
    if (!title || !content || !id) {
      console.log("Something Went Wrong");
      return;
    }
    await BlogPostAPI.edit({ id, title, content });
    callback();
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, removeBlogPost, editBlogPost, findBlogPosts },
  [{ title: "test", id: 1, content: "test" }]
);
