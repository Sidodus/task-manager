import React, { Component } from "react";
import Search from "../components/layouts/Search";
import CompletedResults from "./CompletedResults";
import FormFooterPills from "./FormFooterPills";
import FormFooterItems from "./FormFooterItems";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getCompletedTodos,
  getCompletedTodosSortDown,
  getCompletedTodosSortDefault,
  getCompletedTodosSortUp
} from "../actions/todoListActions";

class CompletedTodos extends Component {
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
    this.props.getCompletedTodosSortDown();
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
    this.props.getCompletedTodosSortDefault();
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
    this.props.getCompletedTodosSortUp();
  };

  render() {
    const { todo } = this.props;
    return (
      <div>
        {/* Search Bar */}
        <Search />
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
            Task Archive
          </h4>
          <div className="card-body text-center">
            <label htmlFor="name" className="card-title text-danger">
              <i className="fa fa-tasks text-secondary" /> Completed Task(s)
            </label>
            <CompletedResults />
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
                text="Back To Active Task(s)"
                classname="nav-link btn btn-sm btn-outline-secondary ml-3"
                goBack="fa fa-backward"
                href="/"
              />
            </ul>
          </ul>
        </div>
      </div>
    );
  }
}

CompletedTodos.propTypes = {
  todo: PropTypes.array.isRequired,
  getCompletedTodos: PropTypes.func.isRequired,
  getCompletedTodosSortDown: PropTypes.func.isRequired,
  getCompletedTodosSortDefault: PropTypes.func.isRequired,
  getCompletedTodosSortUp: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todo: state.todo.todos
});

export default connect(mapStateToProps, {
  getCompletedTodos,
  getCompletedTodosSortDown,
  getCompletedTodosSortDefault,
  getCompletedTodosSortUp
})(CompletedTodos);
