import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addSearchTodo } from "../../actions/todoListActions";

class Search extends Component {
  state = {
    initialTodos: [],
    filtredTodos: []
  };

  UNSAFE_componentWillReceiveProps(props) {
    // Manage props.current Within State
    if (
      this.state.initialTodos.length === 0 ||
      localStorage.getItem("todoIsDeleted") === "true"
    ) {
      this.setState({
        initialTodos: props.current,
        filtredTodos: props.current
      });
      localStorage.setItem("todoIsDeleted", false);
    } else {
      this.setState({
        filtredTodos: props.current
      });
    }
  }

  componentDidUpdate() {
    this.props.addSearchTodo(this.state.filtredTodos);
  }

  filterList = e => {
    const { initialTodos } = this.state;

    let currentItems = initialTodos;

    currentItems = currentItems.filter(item => {
      return item.todo.toLowerCase().includes(e.target.value.toLowerCase());
    });
    this.setState({ filtredTodos: currentItems });
  };

  render() {
    return (
      <div
        style={{
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}
      >
        <div className="bg-dark pb-2">
          <li
            className="container navbar-nav nav-item"
            style={{ marginTop: "-8px" }}
          >
            <input
              value={this.state.changedValue}
              onChange={this.filterList}
              type="text"
              className="fa fa-tasks"
              placeholder="Enter Search Word"
              style={{ textAlign: "center", backgroundColor: "lightyellow" }}
            />
          </li>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  current: PropTypes.array.isRequired,
  addSearchTodo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  current: state.todo.todos
});

export default connect(mapStateToProps, {
  addSearchTodo
})(Search);
