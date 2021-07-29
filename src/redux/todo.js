const initialState = {
  list: [
    { id: 1, text: "Todo Item 1", checked: false },
    { id: 2, text: "Todo Item 2", checked: false },
    { id: 3, text: "Todo Item 3", checked: false },
  ],
};

function getID(state) {
  const newID = state.list[state.list.length - 1]["id"] + 1;
  return newID;
}

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const CHANGE_CHECK = "CHANGE_CHECK";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const changeCheck = (id) => ({
  type: CHANGE_CHECK,
  payload: id
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        id: getID(state),
        text: action.payload,
        checked: false,
      };
      return {
        ...state,
        list: [...state.list, newTodo],
      };
    case "DELETE_TODO":
      return {
        ...state,
        list: state.list.filter((todo) => todo.id !== action.payload)
      };
      case "CHANGE_CHECK":
        return {
          ...state,
          list: state.list.map((todo) => {
            if (todo.id === action.payload) {
              todo.checked = !todo.checked;
            }
            return todo;
          })
        }
    default:
      return state;
  }
};

export default reducer;
