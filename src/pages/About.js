import React from "react";

function About() {
  return (
    <div
      className="container row col-sm-8 mx-auto my-3 card"
      style={{
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
      }}
    >
      <h1
        className="display-4 text-success p-2 mb-4 text-center"
        style={{
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}
      >
        About <span className="text-danger">Task</span> Manager <br />
        <p className="text-secondary h6">Version 0.1.0</p>
      </h1>
      <p className="lead">
        <span className="text-danger h4">Task</span>
        <span className="text-success h4"> Manager</span> Is An Easy To Use Task
        Manager With Advance Features To Manage Daily Schedules
      </p>
      <hr />
      <h6 className="text-secondary">
        Developed With React.js &amp; Redux Context Manager.
        <br />
        <br />
        <a href="https://github.com/Sidodus">https://github.com/Sidodus</a>
      </h6>
      <hr />
    </div>
  );
}

export default About;
