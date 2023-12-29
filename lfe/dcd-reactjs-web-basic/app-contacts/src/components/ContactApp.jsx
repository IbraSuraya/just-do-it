import React from 'react';
import ContactList from './ContactList';
import ContactInput from './ContactInput';
import { getData } from '../utils/data';
 
class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contacts: getData() }
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
  }
  
  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({ contacts });
  }
  onAddContactHandler({ name, tag }) {
    this.setState((prevState) => {
      return {
        contacts: [
          // spread operator untuk mempertahankan item yang sebelumnya berada di dalam array contacts.
          ...prevState.contacts,
          {
            id: +new Date(),
            name,
            tag,
            imageUrl: 'https://source.unsplash.com/user/erondu/250x250',
          }
        ]
      }
    });
  }
  
  render() {
    return (
      <div className="contact-app">
        <h1>Aplikasi Kontak</h1>
        <h2>Tambah Kontak</h2>
        <ContactInput addContact={this.onAddContactHandler} />
        <h1>Daftar Kontak</h1>
        <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
 }

export default ContactApp;


// function ContactApp() {
//  const contacts = getData();
 
//  return (
//    <div className="contact-app">
//      <h1>Daftar Kontak</h1>
//      <ContactList contacts={contacts} />
//    </div>
//  );
// }