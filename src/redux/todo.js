const initialState = {
  list: [],
};

function getID(state) {
  const newID = state.list.length === 0 ? 1 : state.list[state.list.length - 1]["id"] + 1;
  return newID;
}

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const DELETE_ALL = "DELETE_ALL";
const CHANGE_CHECK = "CHANGE_CHECK";
const INIT_TODOS = "INIT_TODOS";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const deleteAll = () => ({
  type: DELETE_ALL
})

export const changeCheck = (id) => ({
  type: CHANGE_CHECK,
  payload: id,
});

export const initTodos = (list) => ({
  type: INIT_TODOS,
  payload: list,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_TODOS:
      return {
        ...state,
        list: action.payload,
      };
    case ADD_TODO:
      const newTodo = {
        id: getID(state),
        text: action.payload,
        checked: false,
      };
      return {
        ...state,
        list: [...state.list, newTodo],
      };
    case DELETE_TODO:
      return {
        ...state,
        list: state.list.filter((todo) => todo.id !== action.payload),
      };
    case DELETE_ALL:
      return {
        ...state,
        list: []
      }
    case CHANGE_CHECK:
      return {
        ...state,
        list: state.list.map((todo) => {
          if (todo.id === action.payload) {
            todo.checked = !todo.checked;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
