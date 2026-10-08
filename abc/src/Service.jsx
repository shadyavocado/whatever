
import React, { useState } from 'react';
import './Service.css';

function Service() {


  return (
    <div className="service-page">

      <div className="service-wrapper">

        <div className="service-header">
          <span className="badge">Service Management</span>

          <h2>Add New Service</h2>

          <p>
            Enter the service details below to add a new service.
          </p>
        </div>

        <form className="service-card" onSubmit="">

          {/* Service Name */}
          <div className="input-group">
            <label>Service Name</label>

            <input
              type="text"
              name="serviceName"
          
              placeholder="e.g. Web Development"
              required
            />
          </div>

          {/* Category & Price */}
          <div className="form-row">

            <div className="input-group">
              <label>Category</label>

              <select
                name="category"
            
                required
              >
                <option value="">Select Category</option>
                <option value="Web Development">Web Development</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="SEO">SEO</option>
              </select>
            </div>

            <div className="input-group">
              <label>Price</label>

              <input
                type="number"
                name="price"
                placeholder="e.g. 25000"
                required
              />
            </div>

          </div>

          {/* Duration & Status */}
          <div className="form-row">

            <div className="input-group">
              <label>Duration</label>

              <select
                name="duration"
             
                required
              >
                <option value="">Select Duration</option>
                <option value="1 Week">1 Week</option>
                <option value="2 Weeks">2 Weeks</option>
                <option value="1 Month">1 Month</option>
                <option value="3 Months">3 Months</option>
              </select>
            </div>

            <div className="input-group">
              <label>Status</label>

              <select
                name="status"
       
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

          </div>

          {/* Description */}
          <div className="input-group">
            <label>Description</label>

            <textarea
              name="description"
      
              rows="4"
              placeholder="Enter a short description about the service..."
              required
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="form-actions">

            <button
              type="reset"
              className="btn-secondary"
            >
              Reset
            </button>

            <button type="submit" className="btn-primary">
              Add Service
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default Service;

