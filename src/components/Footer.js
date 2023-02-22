import React from "react";
import myLogo from "./logoCookbook.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-warning text-black">
      <section className="py-5">
        <div className="container text-center text-md-start">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-2">
              <h6 className="text-uppercase fw-bold mb-2">
                <img src={myLogo} alt="logo" style={{ width: 25 }} />
                Perfect Burgers
              </h6>
              <p>
                This page is a collection of top burger recipes from our
                professional chefs. Each recipe has a detailed description — so
                don't hesitate and try it today. It's free!
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2">
              <h6 className="text-uppercase fw-bold mb-2">Products</h6>
              <p className="m-0">
                <a className="text-reset text-decoration-none" href="#!">
                  Recipes
                </a>
              </p>
              <p className="m-0">
                <a className="text-reset text-decoration-none" href="#!">
                  Ingredients
                </a>
              </p>
              <p className="m-0">
                <a className="text-reset text-decoration-none" href="#!">
                  Drinks
                </a>
              </p>
              <p className="m-0">
                <a className="text-reset text-decoration-none" href="#!">
                  Cooking techniques
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-2">
              <h6 className="text-uppercase fw-bold mb-2">Useful links</h6>
              <p className="m-0">
                <a className="text-reset text-decoration-none" href="#!">
                  Settings
                </a>
              </p>
              <p className="m-0">
                <a className="text-reset text-decoration-none" href="#!">
                  FAQ
                </a>
              </p>
              <p className="m-0">
                <a className="text-reset text-decoration-none" href="#!">
                  Help
                </a>
              </p>
              <p className="m-0">
                <a className="text-reset text-decoration-none" href="#!">
                  Feedback
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-2">
              <h6 className="text-uppercase fw-bold mb-2">Contact</h6>
              <p className="m-0 text-decoration-none">
                Berlin, Lüneburgerstr. 15b, Germany
              </p>
              <p className="m-0 text-decoration-none">
                perfectburgers@gmail.com
              </p>
              <p className="m-0 text-decoration-none">+ 49 234 567 88</p>
              <p className="m-0 text-decoration-none">+ 49 234 567 89</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="row d-flex justify-content-center align-items-center pb-5">
          <div className="col-auto">
            <p>
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
          <div className="col-md-5 col-12">
            <div className="form-outline mb-4">
              <input
                type="email"
                placeholder="Enter your email address"
                id="form5Example27"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-md btn-dark mb-4">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      <div
        className="text-center py-4 text-light"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        © 2023 Copyright:{" "}
        <Link to="/" className="text-light">
          Perfect Burgers
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
