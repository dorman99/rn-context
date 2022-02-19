import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => { // reason why its return anonym so it can be used in other action such as onPress
    dispatch({ type: "add" });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost },
  []
);
