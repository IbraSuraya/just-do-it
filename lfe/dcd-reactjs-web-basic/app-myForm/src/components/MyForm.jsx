import React from 'react';
 
class MyForm extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      email: '',
      name: '',
      gender: 'Man'
    };

    this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onGenderChangeEventHandler = this.onGenderChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onEmailChangeEventHandler(event) {
    this.setState(() => {
      return { email: event.target.value };
    });
  }
  onNameChangeEventHandler(event) {
    this.setState(() => {
      return { name: event.target.value };
    });
  }
  onGenderChangeEventHandler(event) {
    this.setState((prevState) => {
      return { gender: event.target.value };
    });
  }

  onSubmitEventHandler(event) {
    // untuk menghentikan aksi default dari tombol submit (Biar inputan gk langsung ilang)
    event.preventDefault();
  
    const message = `
      Name: ${this.state.name}
      Email: ${this.state.email}
      Gender: ${this.state.gender}
    `;
  
    alert(message);
  }

  render() {
    return (
      <div>
        <h1> Register Form</h1>
        <form onSubmit={this.onSubmitEventHandler}>
          <label htmlFor="email">Email: </label>
          <input id="email" type="email" value={this.state.email} onChange={this.onEmailChangeEventHandler}/>
          <br />
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" value={this.state.name} onChange={this.onNameChangeEventHandler}/>
          <br />
          <label htmlFor="gender">Gender: </label>
          <select id="gender" value={this.state.gender} onChange={this.onGenderChangeEventHandler}>
            <option value="Man">Man</option>
            <option value="Woman">Woman</option>
          </select>
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default MyForm