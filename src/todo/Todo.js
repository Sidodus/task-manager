import React, { Component } from "react";
import Search from "../components/layouts/Search";
import Results from "./Results";
import FormFooterPills from "./FormFooterPills";
import FormFooterItems from "./FormFooterItems";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getTodos,
  getTodosSortDown,
  getTodosSortDefault,
  getTodosSortUp
} from "../actions/todoListActions";

class Todo extends Component {
  sortDown = () => {
    // Adjust Button Display
    document
      .querySelector(".downSort")
      .classList.remove("btn-outline-secondary");
    document.querySelector(".downSort").classList.add("btn-secondary");

    document.querySelector(".defaultSort").classList.remove("btn-secondary");
    document
      .querySelector(".defaultSort")
      .classList.add("btn-outline-secondary");

    document.querySelector(".upSort").classList.remove("btn-secondary");
    document.querySelector(".upSort").classList.add("btn-outline-secondary");

    // Dispatch
    this.props.getTodosSortDown();
  };

  sortDefault = () => {
    // Adjust Button Display
    document
      .querySelector(".defaultSort")
      .classList.remove("btn-outline-secondary");
    document.querySelector(".defaultSort").classList.add("btn-secondary");

    document.querySelector(".downSort").classList.remove("btn-secondary");
    document.querySelector(".downSort").classList.add("btn-outline-secondary");

    document.querySelector(".upSort").classList.remove("btn-secondary");
    document.querySelector(".upSort").classList.add("btn-outline-secondary");

    // Dispatch
    this.props.getTodosSortDefault();
  };

  sortUp = e => {
    // Adjust Button Display
    document.querySelector(".upSort").classList.remove("btn-outline-secondary");
    document.querySelector(".upSort").classList.add("btn-secondary");

    document.querySelector(".defaultSort").classList.remove("btn-secondary");
    document
      .querySelector(".defaultSort")
      .classList.add("btn-outline-secondary");

    document.querySelector(".downSort").classList.remove("btn-secondary");
    document.querySelector(".downSort").classList.add("btn-outline-secondary");

    // Dispatch
    this.props.getTodosSortUp();
  };

  render() {
    const { todo } = this.props;
    return (
      <div>
        {/* Search Bar */}
        <Search id="search" />
        {/* Body */}
        <div
          className="container row col-sm-10 mx-auto my-3 card"
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
            Task Manager
          </h4>
          <div className="card-body text-center">
            <label htmlFor="name" className="card-title text-success">
              <i className="fa fa-tasks text-secondary" /> Task(s) To Complete
            </label>
            <Results />
          </div>
          <ul className="nav card-footer mx-auto">
            <FormFooterItems
              dataTip="Add A Task"
              classname="fa fa-lg fa-file-plus btn btn-light btn-sm mx-2 mr-5 text-secondary"
              styling={{ cursor: "pointer", fontSize: "1.8em" }}
              href="/todo/add"
            />
            <FormFooterItems
              dataTip="Sort Downwards"
              classname="downSort fa fa-sm fa-sort-amount-down btn btn-outline-secondary btn-sm mx-2"
              styling={{ cursor: "pointer", fontSize: "1.5em" }}
              sort={this.sortDown.bind(this)}
              href="#"
            />
            <FormFooterItems
              dataTip="Reset Sort"
              classname="defaultSort fa fa-sm fa-ellipsis-v-alt btn btn-secondary btn-sm mx-2"
              styling={{ cursor: "pointer", fontSize: "1.5em" }}
              sort={this.sortDefault.bind(this)}
              href="#"
            />
            <FormFooterItems
              dataTip="Sort Upwards"
              classname="upSort fa fa-sm fa-sort-amount-up btn btn-outline-secondary btn-sm mx-2 mr-5"
              styling={{ cursor: "pointer", fontSize: "1.5em" }}
              sort={this.sortUp.bind(this)}
              href="#"
            />
            <FormFooterItems
              classname2="fa fa-grip-lines-vertical fa-3x ml-1 mr-5 text-info"
              styling2={{
                fontSize: "3em",
                color: "lightgray"
              }}
              href="#"
            />

            <FormFooterItems
              number={todo.length}
              text="item(s) left"
              href="#"
            />

            <ul className="nav nav-pills ml-3" styling={{ float: "right" }}>
              <FormFooterPills
                text="Go To Completed Task(s)"
                classname="nav-link btn btn-sm btn-outline-primary ml-3"
                goFoward="fa fa-forward"
                href="/todo/complete"
              />
            </ul>
          </ul>
        </div>
      </div>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.array.isRequired,
  getTodos: PropTypes.func.isRequired,
  getTodosSortDown: PropTypes.func.isRequired,
  getTodosSortDefault: PropTypes.func.isRequired,
  getTodosSortUp: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todo: state.todo.todos
});

export default connect(mapStateToProps, {
  getTodos,
  getTodosSortDown,
  getTodosSortDefault,
  getTodosSortUp
})(Todo);
