import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteCompletedTodo, addTodo } from "../actions/todoListActions";
import { getCompletedStorageTodos } from "../actions/todoStorageAction";

import ReactTooltip from "react-tooltip";

class CompletedFormResults extends Component {
  toDelete = id => {
    const confirmDelete = window.confirm("Confirm Delete");

    if (confirmDelete === true) {
      this.props.deleteCompletedTodo(id);
    } else {
      return;
    }
  };

  unDo = async id => {
    const deletedCompletedTodo = getCompletedStorageTodos().filter(
      todo => todo.id === id
    ); // Pull Out Deleted Todo

    // Dispatch
    this.props.addTodo(deletedCompletedTodo[0]); // This Comes 1st
    this.props.deleteCompletedTodo(id); // This Comes 2nd

    // Adjust Button Display
    document
      .querySelector(".defaultSort")
      .classList.remove("btn-outline-secondary");
    document.querySelector(".defaultSort").classList.add("btn-secondary");

    document.querySelector(".downSort").classList.remove("btn-secondary");
    document.querySelector(".downSort").classList.add("btn-outline-secondary");

    document.querySelector(".upSort").classList.remove("btn-secondary");
    document.querySelector(".upSort").classList.add("btn-outline-secondary");
  };

  render() {
    const { id, todoTask, date, time, dateCreated } = this.props;

    let idSTR = id.toString();

    const dateCreatedDate = new Date(dateCreated).toDateString();
    const dateCreatedTime = new Date(dateCreated).toTimeString().substr(0, 7);

    let showDateCreated;

    dateCreated !== undefined
      ? (showDateCreated = `Created On ${dateCreatedDate} @ ${dateCreatedTime}`)
      : (showDateCreated = null);

    return (
      <form
        className="my-1 text-left card-header"
        style={{
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}
      >
        <div className="form-check" style={{ overflow: "auto" }}>
          <label className="form-check-label" data-tip={showDateCreated}>
            <input
              type="checkbox"
              className="form-check-input"
              style={{
                boxShadow: "0px 2px 4px rgba(0, 0, 0, .5)"
              }}
              data-toggle="collapse"
              id={`click${idSTR}`}
              data-target={`#id${idSTR}`}
            />{" "}
            {todoTask}{" "}
          </label>
          <ReactTooltip />
          <i
            data-tip="Delete Completed Task"
            className="fa fa-times text-danger"
            style={{ float: "right", cursor: "pointer", fontSize: "2em" }}
            onClick={this.toDelete.bind(this, id)}
          />
          {/* Hide Date & Time If It's Not Set  */}
          {date !== undefined || date !== undefined ? (
            <span>
              <span className="text-secondary mr-5" style={{ float: "right" }}>
                <i className="fa fa-calendar-day"> {date} </i>
                <i className="fa fa-alarm-clock ml-3"> {time} </i>
              </span>{" "}
            </span>
          ) : null}
          <div id={`id${idSTR}`} className="collapse">
            <button
              type="button"
              className="btn btn-sm btn-success"
              onClick={this.unDo.bind(this, `${idSTR}`)}
            >
              <span
                style={{
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                }}
              >
                unDo
              </span>
            </button>{" "}
          </div>
        </div>
      </form>
    );
  }
}

CompletedFormResults.propTypes = {
  deleteCompletedTodo: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  completedTodo: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  todo: state.todo.todos,
  completedTodo: state.todo.completedTodos
});

export default connect(mapStateToProps, {
  deleteCompletedTodo,
  addTodo
})(CompletedFormResults);
