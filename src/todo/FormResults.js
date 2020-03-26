import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTodo, addCompletedTodo } from "../actions/todoListActions";
import { getStorageTodos } from "../actions/todoStorageAction";

import ReactTooltip from "react-tooltip";

import classnames from "classnames";

class FormResults extends Component {
  state = {
    taskNowNow: false
  };

  componentDidMount() {
    const { date, time } = this.props;
    const todaySDate = new Date().toDateString();
    const timeNow = new Date().toLocaleTimeString();
    const taskEqualThisMoment =
      date === todaySDate && time.substr(0, 5) === timeNow.substr(0, 5);

    if (taskEqualThisMoment) {
      this.setState({ taskNowNow: true });
    }
  }

  toDelete = id => {
    const confirmDelete = window.confirm("Confirm Delete");

    if (confirmDelete === true) {
      this.props.deleteTodo(id);
      localStorage.setItem("todoIsDeleted", true);
    } else {
      return;
    }
  };

  back = idSTR => document.getElementById(`click${idSTR}`).click();

  completed = id => {
    const deletedTodo = getStorageTodos().filter(todo => todo.id === id); // Pull Out Deleted Todo

    // Dispatch
    this.props.addCompletedTodo(deletedTodo[0]); // This Comes 1st
    this.props.deleteTodo(id); // This Comes 2nd

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
    const todaySDate = new Date().toDateString();

    const dateCreatedDate = new Date(dateCreated).toDateString();
    const dateCreatedTime = new Date(dateCreated).toTimeString().substr(0, 7);

    let idSTR = id.toString();

    let showDateCreated;

    dateCreated !== undefined
      ? (showDateCreated = `Created On ${dateCreatedDate} @ ${dateCreatedTime}`)
      : (showDateCreated = null);

    return (
      <form
        id={id}
        className={classnames("my-1 text-left card-header", {
          "bg-warning": this.state.taskNowNow
        })}
        style={{
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}
      >
        {/* Only Display Side Effect (Nigerian Flag); If Task Is Due On Same Date   */}
        {todaySDate === date ? (
          <div
            data-tip="This Task Is Due Today"
            style={{
              width: "15px",
              height: "15px",
              backgroundColor: "green",
              backgroundImage: "linear-gradient(green, white, green)",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              float: "left",
              marginLeft: "-63px",
              marginTop: "5px",
              transform: "rotate(90deg)"
            }}
            className="rounded-circle"
          ></div>
        ) : null}
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
            data-tip="Delete Task"
            className="fa fa-times text-danger"
            style={{ float: "right", cursor: "pointer", fontSize: "2em" }}
            onClick={this.toDelete.bind(this, id)}
          />
          <Link
            data-tip="Edit Task"
            to={`/todo/edit/${id}`}
            className="fa fa-pencil-alt mr-3 text-dark"
            style={{ float: "right", cursor: "pointer", fontSize: "2em" }}
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
              onClick={this.back.bind(this, `${idSTR}`)}
            >
              <span
                style={{
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                }}
              >
                Back
              </span>
            </button>{" "}
            <div className="spinner-border spinner-border-sm"></div>{" "}
            <button
              type="button"
              className="btn btn-sm btn-danger"
              onClick={this.completed.bind(this, id)}
            >
              <span
                style={{
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                }}
              >
                Completed
              </span>
            </button>
          </div>
        </div>
      </form>
    );
  }
}

FormResults.propTypes = {
  // addTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  addCompletedTodo: PropTypes.func.isRequired,
  completedTodo: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  todo: state.todo.todos,
  completedTodo: state.todo.completedTodos
});

export default connect(mapStateToProps, {
  // addTodo,
  deleteTodo,
  addCompletedTodo
})(FormResults);
