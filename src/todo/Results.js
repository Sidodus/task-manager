import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTodos } from "../actions/todoListActions";

import FormResults from "./FormResults";

class Results extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    const { todos } = this.props;
    return (
      <React.Fragment>
        {todos.map(todo => (
          <FormResults
            key={todo.id}
            id={todo.id}
            todoTask={todo.todo}
            date={todo.date}
            date_Full={todo.date_Full}
            dateCreated={todo.dateCreated}
            time={todo.time}
          />
        ))}
      </React.Fragment>
    );
  }
}

Results.propTypes = {
  todos: PropTypes.array.isRequired,
  getTodos: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todos: state.todo.todos
});

export default connect(mapStateToProps, { getTodos })(Results);
