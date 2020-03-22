import React, { Component } from "react";
import { Link } from "react-router-dom";

import ReactTooltip from "react-tooltip";

class FormFooterItems extends Component {
  render() {
    const {
      classname,
      styling,
      classname2,
      styling2,
      number,
      text,
      href,
      sort,
      dataTip
    } = this.props;
    return (
      <ul className="nav">
        <ReactTooltip />
        <Link to={href} onClick={sort} data-tip={dataTip}>
          <li className="nav-item mx-auto pt-2">
            <i
              className={classname}
              style={{
                styling
              }}
            />
          </li>
        </Link>
        <i
          className={classname2}
          style={{
            styling2
          }}
        />
        <span className="pt-2 text-secondary">
          {" "}
          {number} {text}{" "}
        </span>
      </ul>
    );
  }
}

export default FormFooterItems;
