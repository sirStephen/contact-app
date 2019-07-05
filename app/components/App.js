/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Nav from './Nav';
import ContactsTable from './ContactsTable';
import SideBar from './SideBar';

export default function App() {
  return (
    <div>
      <Nav />
      <div className="is-flex">
        <SideBar />
        <ContactsTable />
      </div>
    </div>
  );
}
