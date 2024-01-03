import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from '../pages/HomePage';
import AddPage from '../pages/AddPage';

function ContactApp() {
  return (
    <div className="contact-app">
      <header className='contact-app__header'>
        <h1>Aplikasi Kontak</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default ContactApp;


// function ContactApp() {
//  const contacts = getContacts();
 
//  return (
//    <div className="contact-app">
//      <h1>Daftar Kontak</h1>
//      <ContactList contacts={contacts} />
//    </div>
//  );
// }

// ==== versi class : add dan delete item
// import ContactList from './ContactList.jsx';
// import ContactInput from './ContactInput.jsx';
// import { getContacts } from '../utils/data.jsx';
 
// class ContactApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { contacts: getContacts() }
//     this.onDeleteHandler = this.onDeleteHandler.bind(this);
//     this.onAddContactHandler = this.onAddContactHandler.bind(this);
//   }
  
//   onDeleteHandler(id) {
//     const contacts = this.state.contacts.filter(contact => contact.id !== id);
//     this.setState({ contacts });
//   }
//   onAddContactHandler({ name, tag }) {
//     this.setState((prevState) => {
//       return {
//         contacts: [
//           // spread operator untuk mempertahankan item yang sebelumnya berada di dalam array contacts.
//           ...prevState.contacts,
//           {
//             id: +new Date(),
//             name,
//             tag,
//             imageUrl: 'https://source.unsplash.com/user/erondu/250x250',
//           }
//         ]
//       }
//     });
//   }
  
//   render() {
//     return (
//       <div className="contact-app">
//         <h1>Aplikasi Kontak</h1>
//         <h2>Tambah Kontak</h2>
//         <ContactInput addContact={this.onAddContactHandler} />
//         <h1>Daftar Kontak</h1>
//         <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
//       </div>
//     );
//   }
//  }