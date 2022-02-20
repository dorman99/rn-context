import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "remove":
      return state.filter((blog) => blog.id !== action.payload.id);
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return ({ title, content, callback }) => {
    if (!title || !content) {
      console.log("Something Went Wrong");
      return;
    }
    // reason why its return anonym so it can be used in other action such as onPress
    dispatch({ type: "add", payload: { title, content } });
    callback();
  };
};

const removeBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "remove", payload: { id } });
  };
};

const findBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "find", payload: { id } });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, removeBlogPost },
  []
);
