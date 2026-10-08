import React, { useState } from 'react';
import Axios from 'axios';
import './Model.css';

function Model() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:3000/api/register", {
      email: email,
      password: password
    })
    .then((response) => {
      console.log(response);
      alert("User Registered Successfully!");

      // Clear inputs
      setEmail('');
      setPassword('');
    })
    .catch((error) => {
      console.log("ERROR:", error);
      console.log("Response:", error.response);
      console.log("Message:", error.message);

      alert(error.response?.data?.message || error.message);
    });
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content custom-dark-modal">

          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Enter Your Credentials
            </h1>

            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <form id="registerForm" onSubmit={handleSubmit}>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control custom-input"
                  placeholder="name@example.com"
                  required
                />
                <div className="form-text custom-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control custom-input"
                  placeholder="••••••••"
                  required
                />
              </div>

            </form>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary-custom"
              data-bs-dismiss="modal"
            >
              Close
            </button>

            <button
              type="submit"
              form="registerForm"
              className="btn btn-primary-custom"
            >
              Submit
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Model;