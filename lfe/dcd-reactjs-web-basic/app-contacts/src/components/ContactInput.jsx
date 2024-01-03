import React from 'react';
import PropTypes from 'prop-types';
 
class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      tag: '',
    }

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEventHandler(event) {
    this.setState(() => {
      return { name: event.target.value, }
    });
  }
  onTagChangeEventHandler(event) {
    this.setState(() => {
      return { tag: event.target.value, }
    });
  }
  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addContact(this.state);
  }

  render() {
    return (
      <form className='contact-input' onSubmit={this.onSubmitEventHandler}>
        <span id="nameInput" htmlFor="name">Name: </span>
        <input name="nameInput" id='nameInput' type="text" placeholder="Nama" value={this.state.name} onChange={this.onNameChangeEventHandler}/>
        
        <span id="tagInput" htmlFor="tag">Tag: </span>
        <input name="tagInput" id='tagInput' type="text" placeholder="Tag" value={this.state.tag} onChange={this.onTagChangeEventHandler}/>
        
        <button type="submit">Tambah</button>
      </form>
    )
  }
}

ContactInput.propTypes = {
  addContact: PropTypes.func.isRequired,
}
 
export default ContactInput;