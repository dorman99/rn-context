import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `Blog Post #${state.length + 1}`,
        },
      ];
    case "remove":
      return state.filter((blog) => blog.id !== action.payload.id);
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    // reason why its return anonym so it can be used in other action such as onPress
    dispatch({ type: "add" });
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
