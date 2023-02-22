import React, { useState } from "react";

export default function Auth() {
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form
          className="Auth-form text-light"
          style={{ backgroundColor: "#555" }}
        >
          <div className="Auth-form-content">
            <h3 className="Auth-form-title text-light">Log In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <a href="#!" className="link-warning" onClick={changeAuthMode}>
                Sign Up
              </a>
            </div>
            <div className="form-group mt-3 text-light">
              <label className="text-light">Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label className="text-light">Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-warning">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot{" "}
              <a href="#!" className="link-warning">
                password?
              </a>
            </p>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="Auth-form-container">
      <form
        className="Auth-form text-light"
        style={{ backgroundColor: "#555" }}
      >
        <div className="Auth-form-content">
          <h3 className="Auth-form-title text-light">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <a href="#!" className="link-warning" onClick={changeAuthMode}>
              Log In
            </a>
          </div>
          <div className="form-group mt-3">
            <label className="text-light">Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g Max Burger"
            />
          </div>
          <div className="form-group mt-3">
            <label className="text-light">Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label className="text-light">Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-warning">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot{" "}
            <a href="#!" className="link-warning">
              password?
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
