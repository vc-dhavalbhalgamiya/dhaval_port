import React from "react";

const Title = (props) => {
  return (
    <div className="title-section">
      <h1 className="f-900 text-uppercase mb-0">
        {props.title}
        <span className="c-tx-primary ms-3">{props.primary_title}</span>
      </h1>
      <span class="title-bg">Resume</span>
    </div>
  );
};

export default Title;
