import React from 'react';
import './home.css';
const Login = () => {
  return (
<>
{/* Section: Design Block */}
<section className="background-radial-gradient overflow-hidden">
  <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
    <div className="row gx-lg-5 align-items-center mb-5">
      <div className="col-lg-6 mb-5 mb-lg-0" style={{zIndex: 10}}>
        <h1 className="my-5 display-5 fw-bold ls-tight" style={{color: 'hsl(218, 81%, 95%)'}}>
          Welcome To<br />
          <span style={{color: 'hsl(218, 81%, 75%)'}}>MATRIX</span>
        </h1>
        <p className="mb-4 opacity-70" style={{color: 'hsl(218, 81%, 85%)'}}>

        Matrix is here to transform the way you travel on the metro. Say goodbye to the hassle of physical tickets and cards, and welcome a seamless, ticketless, and cardless journey. Our website is dedicated to providing a convenient and efficient metro experience by harnessing the power of advanced technologies such as location-based charging and contactless payments.

        </p>
      </div>
      <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong" />
        <div id="radius-shape-2" className="position-absolute rounded-circle shadow-5-strong" />
        <div className="card bg-glass m-5 ">
          <div className="card-body px-4 py-5 px-md-5" id="Login">
            <form>
              {/* Email input */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3">Email address</label>
                <input type="email" id="form3Example3" className="form-control" placeholder=" @example.com" required/>
              </div>
              {/* Password input */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example4">Password</label>
                <input type="password" id="form3Example4" className="form-control"placeholder='Enter Your Passwrod' required/>
              </div>
              {/* Submit button */}
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Login
              </button>
              {/* Register buttons */}
              <div className="text-center">
                <p>Or Sign Up using:</p>
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-facebook-f" />
                </button>
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-google" />
                </button>
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-twitter" />
                </button>
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-github" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


</>
  );
};

export default Login;

