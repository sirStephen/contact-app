/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import contacts from './contactsDb';

export default function ContactsTable() {
  return (
    <table>
      <tbody>
        {contacts.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <tr key={index}>
            <td className="tr-image">
              <img src={item.profileImage} alt="profile" />
            </td>

            <td>
              {item.firstName}
              <span> </span>
              {item.lastName}
            </td>

            <td>
              {item.email}
            </td>

            <td>
              {item.digits}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
