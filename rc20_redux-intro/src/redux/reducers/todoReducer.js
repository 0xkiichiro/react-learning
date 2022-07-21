const initialState = {
  todoList: [
    {
      id: new Date().getTime(),
      text: "",
      completed: false,
    },
  ],
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return {
        todoList: [
          ...state.todoList,
          {
            id: new Date().getTime(),
            text: payload,
            completed: false,
          },
        ],
      };
    case "DELETE_TODO":
      return { ...state, ...payload };
    case "TOGGLE_TODO":
      return { ...state, ...payload };
    case "CLEAR_TODO":
      return {
        todoList: [],
      };

    default:
      return state;
  }
};

export default todoReducer;
