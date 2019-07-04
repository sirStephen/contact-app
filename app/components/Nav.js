/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export default function Nav() {
  return (
    <nav className="navigation-container p-2">
      <div className="is-flex navigation-content">
        <div>
          <i className="fas fa-bars" />
        </div>
        <div className="logo-name-container">
          <h2>Fluid Contacts</h2>
        </div>
        <div className="search-container">
          <i className="fas fa-search search-icon" />
          <input
            className="input-effect"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="profile-image-container">
          <img
            src="https://robohash.org/2?bgset=bg1"
            alt="my-profile-pic"
          />
        </div>
      </div>
    </nav>
  );
}
