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
    case "edit":
      const idx = state.findIndex((b) => b.id === action.payload.id);
      if (idx > -1) {
        const { title, content } = action.payload;
        state[idx].title = title;
        state[idx].content = content;
      }
      return state;
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

const editBlogPost = (dispatch) => {
  return ({ id, title, content, callback }) => {
    if (!title || !content || !id) {
      console.log("Something Went Wrong");
      return;
    }
    dispatch({ type: "edit", payload: { id, title, content } });
    callback();
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, removeBlogPost, editBlogPost },
  [{ title: "test", id: 1, content: "test" }]
);
