import React, { Component } from "react";
import { Link } from "react-router-dom";

class FormFooterPills extends Component {
  render() {
    const { styling, href, classname, goBack, text, goFoward } = this.props;
    return (
      <div>
        <div style={styling}>
          <li className="nav-item">
            <Link to={href} type="button" className={classname}>
              <i className={goBack} /> {text} <i className={goFoward} />
            </Link>
          </li>
        </div>
      </div>
    );
  }
}

export default FormFooterPills;
