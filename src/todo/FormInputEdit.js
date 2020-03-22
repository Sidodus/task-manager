import React, { Component } from "react";
import DateTimePicker from "react-datetime-picker";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateTodo } from "../actions/todoListActions";
import { getStorageTodos } from "../actions/todoStorageAction";

class FormInput extends Component {
  state = {
    id: "",
    inputValue: "",
    date: "",
    date_ToDateString: "",
    dateCreated: "",
    time_toLocaleTimeString: ""
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    const allTasks = getStorageTodos();

    let task = allTasks.filter(tasks => tasks.id.toString() === id);

    const { todo, date_Full, dateCreated } = task[0];

    // console.log("TASK[0]", task[0]);

    if (date_Full === undefined) {
      this.setState({
        id,
        inputValue: todo,
        dateCreated
      });
    } else {
      this.setState({
        id,
        inputValue: todo,
        date: new Date(date_Full),
        date_ToDateString: new Date(date_Full).toDateString(),
        dateCreated,
        time_toLocaleTimeString: new Date(date_Full).toLocaleTimeString()
      });
    }
  }

  editInput = e => {
    this.setState({ inputValue: e.target.value });
  };

  changeDate = date => {
    date = new Date(date);

    if (
      date.toDateString() === new Date().toDateString() ||
      date > new Date()
    ) {
      this.setState({
        date,
        date_ToDateString: date.toDateString(),
        time_toLocaleTimeString: date.toLocaleTimeString()
      });
    } else {
      alert(
        "SORRY: \n You Can Only Select Today's Date \n OR \n A Future Date :)"
      );
    }
  };

  submitForm = e => {
    e.preventDefault();

    const {
      id,
      inputValue,
      date,
      date_ToDateString,
      dateCreated,
      time_toLocaleTimeString
    } = this.state;

    let newTask = {};

    if (date_ToDateString === "" || time_toLocaleTimeString === "") {
      newTask = {
        id: id,
        todo: inputValue,
        dateCreated
      };
    } else {
      newTask = {
        id: id,
        todo: inputValue,
        date_Full: date,
        date: date_ToDateString,
        dateCreated,
        time: time_toLocaleTimeString
      };
    }

    // Dispatch & Save To Local Storage
    this.props.updateTodo(newTask);

    this.props.history.push("/");
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div
        className="container row col-sm-8 mx-auto my-3 card"
        style={{
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}
      >
        <h4
          className="display-4 card-header text-center text-dark"
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
          }}
        >
          Event To Edit
        </h4>
        <form onSubmit={this.submitForm}>
          <div className="card-body text-center">
            <div className="form-group">
              <label className="card-title text-secondary">
                <i className="fa fa-tasks text-success" /> Edit Task
              </label>
              <input
                autoFocus
                required
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Task..."
                value={inputValue}
                onChange={this.editInput.bind(this)}
              />
              <div style={{ float: "left" }} className="mt-3 mb-5">
                <label htmlFor="datePicker" className="mr-3 h6">
                  Edit Task Due Date{" "}
                  <span className="text-secondary">(Optional!)</span>
                </label>{" "}
                <br />
                <DateTimePicker
                  id="datePiker"
                  className="btn-block"
                  value={this.state.date}
                  onChange={this.changeDate}
                />
              </div>
            </div>
          </div>
          <input
            type="submit"
            value="Update Task"
            className="btn btn-secondary btn-block my-3"
            style={{
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }}
          />
        </form>
      </div>
    );
  }
}

FormInput.propTypes = {
  todo: PropTypes.array.isRequired,
  updateTodo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todo: state.todo.todos
});

export default connect(mapStateToProps, { updateTodo })(FormInput);
