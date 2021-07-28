import { connect } from "react-redux";

import Todo from "../components/Todo";
import { addTodo } from "../redux/todo";
import { deleteTodo } from "../redux/todo";

const mapStateToProps = (state) => {
  return {
    todos: state.todo.list,
  };
};

const mapActionToProps = {
  addTodo,
  deleteTodo
};

export default connect(mapStateToProps, mapActionToProps)(Todo);
