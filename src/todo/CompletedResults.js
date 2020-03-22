import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCompletedTodos } from "../actions/todoListActions";

import CompletedFormResults from "./CompletedFormResults";

class CompletedResults extends Component {
  componentDidMount() {
    this.props.getCompletedTodos();
  }

  render() {
    const { completedTodos } = this.props;
    return (
      <React.Fragment>
        {completedTodos.map(todo => (
          <CompletedFormResults
            key={todo.id}
            id={todo.id}
            todoTask={todo.todo}
            date={todo.date}
            dateCreated={todo.dateCreated}
            time={todo.time}
          />
        ))}
      </React.Fragment>
    );
  }
}

CompletedResults.propTypes = {
  completedTodos: PropTypes.array.isRequired,
  getCompletedTodos: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  completedTodos: state.todo.todos
});

export default connect(mapStateToProps, { getCompletedTodos })(
  CompletedResults
);
