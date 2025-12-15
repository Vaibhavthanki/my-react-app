import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="d-flex justify-content-between p-3 bg-light">
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col mr-3">
              <Link to="/home">Home</Link>
            </div>
            <div className="col mr-3">
              <Link to="/about">About</Link>
            </div>
            <div className="col mr-3">
              <Link to="/parent">Parent</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
