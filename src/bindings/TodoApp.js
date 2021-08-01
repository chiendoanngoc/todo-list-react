import { connect } from "react-redux";
import axios from "axios";
import Todo from "../components/Todo";
import { addTodo, deleteTodo, changeCheck, initTodos, deleteAll } from "../redux/todo";

const mapStateToProps = (state) => {
  return {
    todos: state.todo.list,
  };
};

const mapActionToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text)),
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  deleteAll: () => dispatch(deleteAll()),
  changeCheck: (id) => dispatch(changeCheck(id)),
  initTodos: async () => {
    const res = await axios.get('https://mockend.com/chiendoanngoc/todo-list-react/lists');
    dispatch(initTodos(res.data));
  }
});

export default connect(mapStateToProps, mapActionToProps)(Todo);
