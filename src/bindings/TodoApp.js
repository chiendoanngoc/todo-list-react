import { connect } from "react-redux";

import Todo from "../components/Todo";
import { addTodo, deleteTodo, changeCheck, initTodos } from "../redux/todo";

const mapStateToProps = (state) => {
  return {
    todos: state.todo.list,
  };
};

const mapActionToProps = {
  addTodo,
  deleteTodo,
  changeCheck,
  initTodos
};

export default connect(mapStateToProps, mapActionToProps)(Todo);
